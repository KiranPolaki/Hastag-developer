//Table

//Data in Object format
//TODO:
//1) convert to JSON
//2) store them in DB
const projects = [
  {
    name: "TodoList",
    category: "Web",
    dif: "Easy",
    code: "https://github.com/CodeExplainedRepo/To-Do-List?tab=readme-ov-file",
  },
  {
    name: "Simple Portfolio",
    category: "Web",
    dif: "Easy",
    code: "https://github.com/manuarora700/simple-developer-portfolio-website",
  },
  {
    name: "Weather App",
    category: "Web",
    dif: "Easy",
    code: "https://github.com/Tanishka-dev/Weather-App-JS",
  },
  {
    name: "Movie recommendation",
    category: "Web",
    dif: "Medium",
    code: "https://github.com/kepelrs/Movie-Picker",
  },
  {
    name: "ELearning platform",
    category: "Web",
    dif: "Medium",
    code: "https://github.com/oppia/oppia",
  },
  {
    name: "edo okate",
    category: "Web",
    dif: "Medium",
    code: "www.edo.com",
  },
  {
    name: "Socialmedia platform",
    category: "Web",
    dif: "Hard",
    code: "https://github.com/dan-divy/spruce",
  },
  {
    name: "Chat App",
    category: "Web",
    dif: "Hard",
    code: "https://github.com/adrianhajdin/project_chat_application",
  },
  {
    name: "edo okate",
    category: "Web",
    dif: "Hard",
    code: "www.edo.com",
  },
  {
    name: "edo okate",
    category: "Web",
    dif: "Hard",
    code: "www.edo.com",
  },
  {
    name: "Tip Calculator",
    category: "Android",
    dif: "Easy",
    code: "https://github.com/ArasanKat/Android-Tip-Calculator",
  },
  {
    name: "Task List",
    category: "Android",
    dif: "Easy",
    code: "https://github.com/matthewman/ToDoList",
  },
  {
    name: "Weather app",
    category: "Android",
    dif: "Easy",
    code: "https://github.com/Mercandj/android-dev-challenge-compose-4",
  },
  {
    name: "Expense Tracker",
    category: "Android",
    dif: "Medium",
    code: "https://github.com/RetroMusicPlayer/RetroMusicPlayer",
  },
  {
    name: "Music Player",
    category: "Android",
    dif: "Medium",
    code: "https://github.com/RetroMusicPlayer/RetroMusicPlayer",
  },
  {
    name: "Fitness Tracker",
    category: "Android",
    dif: "Hard",
    code: "https://github.com/brodeurlv/fastnfitness",
  },
  {
    name: "Chat App",
    category: "Android",
    dif: "Hard",
    code: "https://github.com/GetStream/stream-chat-android",
  },
  {
    name: "Titanic Disaster",
    category: "ML",
    dif: "Easy",
    code: "https://github.com/agconti/kaggle-titanic",
  },
  {
    name: "Iris Species Classification",
    category: "ML",
    dif: "Easy",
    code: "https://github.com/jbrownlee/Datasets",
  },
  {
    name: "Handwritten Digit Recognition",
    category: "ML",
    dif: "Easy",
    code: "https://github.com/topics/mnist",
  },
  {
    name: "Sentiment Analysis ",
    category: "ML",
    dif: "Medium",
    code: "https://github.com/topics/twitter-sentiment-analysis",
  },
  {
    name: "Movie Recommendation",
    category: "ML",
    dif: "Medium",
    code: "https://github.com/topics/movie-recommendation",
  },
  {
    name: "Image Caption Generator",
    category: "ML",
    dif: "Medium",
    code: "https://github.com/topics/image-captioning",
  },
  {
    name: "Stock Price Prediction",
    category: "ML",
    dif: "Hard",
    code: "https://github.com/topics/stock-price-prediction",
  },
  {
    name: "Voice Recognition System",
    category: "ML",
    dif: "Hard",
    code: "https://github.com/topics/voice-recognition",
  },
  {
    name: "Self-Driving Car Technology",
    category: "ML",
    dif: "Hard",
    code: "https://github.com/udacity/self-driving-car",
  },
  {
    name: "Deep Reinforcement Learning",
    category: "ML",
    dif: "Hard",
    code: "https://github.com/topics/deep-reinforcement-learning",
  },
  {
    name: "Crypto wallet",
    category: "Block Chain",
    dif: "Easy",
    code: "https://github.com/bitpay/wallet",
  },
  {
    name: "Simple blockchain",
    category: "Block Chain",
    dif: "Easy",
    code: "https://github.com/dvf/blockchain",
  },
  {
    name: "Token Tracker",
    category: "Block Chain",
    dif: "Easy",
    code: "https://github.com/pixel-point/web3js-tracker-example",
  },
  {
    name: "Voting System",
    category: "Block Chain",
    dif: "Medium",
    code: "https://github.com/mehtaAnsh/BlockChainVoting",
  },
  {
    name: "Blockchain Market place",
    category: "Block Chain",
    dif: "Medium",
    code: "https://github.com/ohager/signum-dappository",
  },
  {
    name: "NFT Platform",
    category: "Block Chain",
    dif: "Medium",
    code: "https://github.com/anaai/anaai",
  },
  {
    name: "Defi app",
    category: "Block Chain",
    dif: "Hard",
    code: "https://github.com/ahmetozlu/defi_yield_farming",
  },
  {
    name: "edo okate",
    category: "Block Chain",
    dif: "Hard",
    code: "",
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

  //TODO: Easy medium hard tables must be collapsable tables
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
