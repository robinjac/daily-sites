import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

function getCreatedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    // Write the date in yyyy-mm-dd hh:mm.
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day
      } ${hour}:${minute}`;
  }
  
  function getJiraTag(slug_parts) {
    let jira_tag = "N/A";
  
    if (slug_parts.includes("ax")) {
        // We have a supported jira tag.
        jira_tag = slug_parts
            .filter((part, index) => part === "ax" || slug_parts[index - 1] === "ax")
            .map((part) => part.toUpperCase())
            .join("-");
    }
  
    return jira_tag;
  }
  
const main_branches = ["master", "develop", "devel", "main"];

const __dirname = dirname(join(fileURLToPath(import.meta.url), ".."));

const view_state = JSON.parse(
    readFileSync(__dirname + "/www/view_state.json", "utf-8")
);

const _getBranches = (project, url) => {
    
    const _url = `${url}/${project.name}`;

    readdirSync(_url)
        .forEach(filename => {

            const stat = statSync(`${_url}/${filename}`);
    
            if (stat && stat.isDirectory()) {

                const type = filename.split("-")[0].toLocaleLowerCase();

                const branch = {
                    name: "N/A",
                    slug: filename,
                    created: getCreatedDate(),
                    jira: getJiraTag(filename.split("-"))
                }

                if(project.branches[type]){
                    project.branches[type].push(branch);
                } else if (main_branches.includes(type)) {
                    project.branches.main.push(branch);
                } else {
                    // Branches that is not a main branch or starts with release, feature or user.
                    project.branches.other.push(branch);
                }   
            }
        });

    return project;
}

const _getProjects = url => {

    const projects = [];

    readdirSync(url)
        .forEach(filename => {

            // Ignore hidden files (starting with .) and the web assets folder (www).
            if(filename[0] !== "." && !["static", "www"].includes(filename)) {
                
                const stat = statSync(`${url}/${filename}`);
        
                if (stat && stat.isDirectory()) {

                    const project = {
                        name: filename,
                        branches: {
                            main: [],
                            release: [],
                            feature: [],
                            user: [],
                            other: []
                        }
                    };

                    projects.push(project);
                }
            }
        });

    return projects;
};

// Find index where the last part of the url resides. This should be the repository name.
let path_index = __dirname.lastIndexOf("/");

// If the url contains \ instead of /, we need to search for those instead.
path_index = path_index === -1 ? __dirname.lastIndexOf("\\") : path_index;

view_state.PROJECTS = _getProjects(__dirname).map(project => _getBranches(project, __dirname));

writeFileSync(__dirname + `/www/view_state.json`, JSON.stringify(view_state, null, 4));
