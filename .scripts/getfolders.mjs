import { readdirSync, writeFileSync, statSync } from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(join(fileURLToPath(import.meta.url), ".."));
const main_branches = ["master", "main", "devel", "develop"];

const _getBranches = project => {
    
    readdirSync(project.url)
        .forEach(filename => {

            const filepath = project.url + "/" + filename;
            const stat = statSync(filepath);
    
            if (stat && stat.isDirectory()) {

                const type = filename.split("-")[0].toLocaleLowerCase();

                if(project.branches[type]){
                    project.branches[type].push(filename);
                } else if (main_branches.includes(type)) {
                    project.branches.main.push(filename);
                } else {
                    project.branches.other.push(filename);
                }
            }
        });

    return project;
}

const _getProjects = dir => {

    const projects = [];

    readdirSync(dir)
        .forEach(filename => {

            if(filename[0] !== ".") {
                
                const filepath = dir + "/" + filename;
                const stat = statSync(filepath);
        
                if (stat && stat.isDirectory()) {

                    const project = {
                        name: filename,
                        url: filepath,
                        branches: {
                            main: [],
                            release: [],
                            feature: [],
                            bugfix: [],
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


const daily_projects = JSON.stringify(_getProjects(__dirname).map(_getBranches));

const index = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Daily sites</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
    <script id="model">
        window.daily_projects = ${daily_projects};
    </script>
    <script id="site" src="/.site/index.js"></script>
    </html>
`;

writeFileSync(__dirname + "/index.html", index);