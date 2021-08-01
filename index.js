
const app = document.getElementById("app");

let htmlString = "";

fetch("https://robinjac.github.io/daily-sites/view_state.json", { mode: "same-origin" })
    .then(res => res.json())
    .then(json => {
        for (let project of json.projects) {
            htmlString += `<h2>${project.name}</h2>`;


            const types = Object.keys(project.branches);

            for (const type of types) {
                htmlString += `<h3>${type}</h3>`;
                const branches = project.branches[type];

                if (branches.length === 0) {
                    htmlString += `<p>No branch</p>`
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