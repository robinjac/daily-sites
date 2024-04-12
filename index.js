const app = document.getElementById("app");
const env = {
  OWNER: "robinjac",
  REPO: "daily-sites",
};
const mode = (mode) => ({
  mode,
});

let htmlString = "";

fetch(
  "https://robinjac.github.io/daily-sites/view_state.json",
  mode("same-origin")
)
  .then((res) => res.json())
  .then((json) => {
    for (let project of json.projects) {
      htmlString += `<h2>${project.name}</h2>`;

      const types = Object.keys(project.branches);

      for (const type of types) {
        htmlString += `<h3>${type}</h3>`;
        const branches = project.branches[type];

        if (branches.length === 0) {
          htmlString += `<p>No branch</p>`;
        } else {
          htmlString += "<ul>";
          for (const branch of branches) {
            htmlString += `<li><a href="/${json.host_repository}/${project.name}/${branch.slug}">${branch.name}</a> <span>${branch.date}</span></li>`;
          }
          htmlString += "</ul>";
        }
      }
    }

    app.insertAdjacentHTML("beforeend", htmlString);
  });

const url = (path) =>
  `https://api.github.com/repos/${env.OWNER}/${env.REPO}/contents/${path}`;

const view_state = {};

fetch(url(""), mode("no-cors")).then(async (response) => {
  const data = await response.json();
  const projects = data.filter(({ type }) => type === "dir");

  for (const project of projects) {
    view_state[project.name] = {};

    const res = await fetch(url(project.path), config);
    const branches = await res.json();

    for (const branch of branches) {
      view_state[project.name][branch.name] = {
        name: branch.name,
        path: branch.path,
      };
    }
  }

  console.log(view_state);
});
