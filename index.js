
const app = document.getElementById("app");

let htmlString = "";

for (let project of daily_projects) {
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
                htmlString += `<li><a href="/daily-sites/${project.name}/${branch}">${branch}</a></li>`;
            }
            htmlString += "</ul>";
        }
    }
}

app.insertAdjacentHTML("beforeend", htmlString);