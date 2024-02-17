//Table

//Data in Object format
//TODOs
//1) convert to JSON
//2) store them in DB
const projects = [
  {
    id: 1,
    name: "Todo-App",
    category: "Web",
    dif: "Easy",
    code: "www.edo.com",
  },
  {
    id: 2,
    name: "Todo-App2",
    category: "Web",
    dif: "Easy",
    code: "www.edo.com",
  },
  {
    id: 3,
    name: "Todo-App3",
    category: "Web",
    dif: "Easy",
    code: "www.edo.com",
  },
  {
    id: 4,
    name: "Chat-App",
    category: "Web",
    dif: "Medium",
    code: "www.edo.com",
  },
  {
    id: 5,
    name: "Chat-App",
    category: "Web",
    dif: "Medium",
    code: "www.edo.com",
  },
  {
    id: 6,
    name: "Chat-App",
    category: "Web",
    dif: "Medium",
    code: "www.edo.com",
  },
  {
    id: 7,
    name: "Chat-App",
    category: "Web",
    dif: "Hard",
    code: "www.edo.com",
  },
  {
    id: 8,
    name: "Chat-App",
    category: "Web",
    dif: "Hard",
    code: "www.edo.com",
  },
  {
    id: 9,
    name: "Chat-App",
    category: "Web",
    dif: "Hard",
    code: "www.edo.com",
  },
  {
    id: 10,
    name: "Chat-analysis",
    category: "ML",
    dif: "Easy",
    code: "www.edo.com",
  },
  {
    id: 11,
    name: "Chat-analysis23",
    category: "AI",
    dif: "Easy",
    code: "www.edo.com",
  },
];

const easyRow = document.querySelector(".easy-data");
const mediumRow = document.querySelector(".medium-data");
const hardRow = document.querySelector(".hard-data");
const btnContainer = document.querySelector(".btn-container");

document.addEventListener("DOMContentLoaded", function () {
  const categories = projects.reduce((categoriesArr, project) => {
    if (!categoriesArr.includes(project.category)) {
      categoriesArr.push(project.category);
    }
    return categoriesArr;
  }, []);

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const projectFilter = projects.filter(
        (project) => project.category === category
      );

      // Clear existing rows
      easyRow.innerHTML = "";
      mediumRow.innerHTML = "";
      hardRow.innerHTML = "";

      // Create new rows
      createProjects2(projectFilter, "Easy", easyRow);
      createProjects2(projectFilter, "Medium", mediumRow);
      createProjects2(projectFilter, "Hard", hardRow);
    });
  });

  //
  function createProjects2(projects, diff, diffRow) {
    let typeOfProjects = projects.filter((project) => {
      return project.dif === `${diff}`;
    });

    const tbody = document.createElement("tbody");
    // create the info row
    let infoRow = document.createElement("tr");
    let infoName = document.createElement("td");
    let infoCode = document.createElement("td");
    infoName.textContent = "Name";
    infoCode.textContent = "Code";
    infoRow.appendChild(infoName);
    infoRow.appendChild(infoCode);
    // append the info row to the tbody
    tbody.appendChild(infoRow);
    // loop through the projects and create the other rows
    typeOfProjects.forEach((project) => {
      let row = document.createElement("tr");
      let nameCell = document.createElement("td");
      let codeCell = document.createElement("td");
      let link = document.createElement("a");
      nameCell.textContent = project.name;
      link.href = project.code;
      link.target = "_blank";
      link.textContent = "code";
      codeCell.appendChild(link);
      row.appendChild(nameCell);
      row.appendChild(codeCell);
      // append the row to the tbody
      tbody.appendChild(row);
    });
    // append the tbody to the diffRow
    diffRow.appendChild(tbody);
  }
});
