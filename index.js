const app = document.getElementById("app");
const env = {
  OWNER: "robinjac",
  REPO: "daily-sites",
};

const viewHtmlString = (view_state) => {
  let htmlString = "";

  const projects = Object.keys(view_state);

  if (projects.length === 0) {
    htmlString += `<p>No projects</p>`;
  } else {
    for (const project_name of Object.keys(view_state)) {
      htmlString += `<h2>${project_name}</h2>`;

      const branches = view_state[project_name];

      if (branches.length === 0) {
        htmlString += `<p>No branches</p>`;
      } else {
        htmlString += "<ul>";
        for (const branch of branches) {
          const [name, date] = branch.split("?");

          htmlString += `<li><a href="/${
            env.REPO
          }/${project_name}/${branch}">${name}</a> <span>${
            date ? date.replace("T", " ") : "N/A"
          }</span></li>`;
        }
        htmlString += "</ul>";
      }
    }
  }

  return htmlString;
};

const url = (path) =>
  `https://api.github.com/repos/${env.OWNER}/${env.REPO}/contents/${
    path || ""
  }`;

fetch(url()).then(async (response) => {
  const data = await response.json();
  const projects = data.filter(({ type }) => type === "dir");
  const view_state = {};

  for (const project of projects) {
    view_state[project.name] = [];

    const res = await fetch(url(project.path));
    const branches = await res.json();

    view_state[project.name] = branches.map(({ name }) => name);
  }

  app.insertAdjacentHTML("beforeend", viewHtmlString(view_state));
});
