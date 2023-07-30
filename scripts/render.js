import { getJobsLocalStorage } from "./functionsButton.js";
import { apply, removeJob } from "./functionsButton.js";

function renderJobs(list) {
  let listJobsElement = document.getElementById("listJobs");
  listJobsElement.innerHTML = "";

  let jobsSelected = getJobsLocalStorage();

  list.forEach((job) => {
    let { id, title, enterprise, location, descrition, modalities } = job;

    const valueButton = jobsSelected.some((jobSelected) => jobSelected.id == id)
      ? "Remover candidatura"
      : "Candidatar";

    let cardJob = document.createElement("li");
    cardJob.classList.add("cardJobs");
    cardJob.id = id;

    cardJob.innerHTML = `
             <h3 class="titleFour">${title}</h3> 
             <div class="cardContainerInformations">
                <small class="textThree">${enterprise}</small>
                <small class="textThree">${location}</small>
            </div>
            <p class="textTwo">${descrition}</p>
            <div class="cardContainerButton">
                <div class="containerModality"></div>
                <input class="buttonCard" id="${id}" type="button" value="${valueButton}">
            </div>
        `;
    const button = cardJob.querySelector(".buttonCard");
    button.addEventListener("click", apply);

    addCategoryButtonToCard(modalities, cardJob);

    listJobsElement.appendChild(cardJob);
  });
}

function addCategoryButtonToCard(list, card) {
  let path = card.children[3].children[0];

  list.forEach((element) => {
    let categoryButton = document.createElement("span");
    categoryButton.classList.add("buttonCategory");

    categoryButton.innerText = element;

    path.appendChild(categoryButton);
  });
}

function renderJobsSelected(list) {
  let listJobsSelected = document.getElementById("containerJobsSelecteds");

  listJobsSelected.innerHTML = "";

  if (list.length > 0) {
    list.forEach((element) => {
      let { id, title, enterprise, location } = element;

      let cardJobSelected = document.createElement("li");
      cardJobSelected.classList.add("cardJobSelected");
      cardJobSelected.id = id;

      cardJobSelected.innerHTML = `
            <div class="cardJobSelectedTitle">
                <h4>${title}</h4>
                <button class="buttonBin" type="button"><img src="../../assets/img/trash.png" alt="imagem da lixeira" style="user-select: none;"></button>
            </div>
            <div class="cardJobSelectedInfo">
                <small class="textThree">${enterprise}</small>
                <small class="textThree">${location}</small>
            </div>
            `;
      const button = cardJobSelected.querySelector(".buttonBin");
      button.addEventListener("click", removeJob);

      listJobsSelected.appendChild(cardJobSelected);
    });
  } else {
    let cardEmpty = document.createElement("li");
    cardEmpty.classList.add("cardEmpty");

    cardEmpty.innerHTML = `
            <p class="textTwo">Você ainda não aplicou para nenhuma vaga</p>
            <div class="containerObjects">
                <div class="objectCardOne"></div>
                <div class="objectCardOne objectCardTwo"></div>
                <div class="objeto-card-3">
                    <div class="boxOne"></div>
                    <div class="boxOne boxTwo"></div>
                    <div class="boxOne caixa-3"></div>
                </div>
            </div>
        `;

    listJobsSelected.appendChild(cardEmpty);
  }
}

export { renderJobs, renderJobsSelected };

