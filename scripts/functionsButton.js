import { jobsData } from "../pages/home/jobsData.js";
import { renderJobsSelected } from "./render.js";

function getJobsLocalStorage() {
  return JSON.parse(localStorage.getItem("@VagasSelecionadas")) || [];
}

function apply(event) {
  let buttonPressed = event.target;
  let idCard = buttonPressed.id;

  let cardSelected = jobsData.find((elemnto) => elemnto.id === +idCard);
  let jobsSelected = getJobsLocalStorage();

  if (buttonPressed.value === "Remover candidatura") {
    buttonPressed.value = "Candidatar";

    let indexCardRemove = jobsSelected.findIndex(
      (elemento) => elemento.id === +idCard
    );

    jobsSelected.splice(indexCardRemove, 1);
    renderJobsSelected(jobsSelected);
  } else {
    buttonPressed.value = "Remover candidatura";

    if (!jobsSelected.includes(cardSelected)) {
      jobsSelected.push(cardSelected);
      renderJobsSelected(jobsSelected);
    }
  }

  localStorage.setItem("@VagasSelecionadas", JSON.stringify(jobsSelected));
}

function removeJob(event) {
  const buttonBin = event.target.closest(".buttonBin");
  const idCardPressed = buttonBin.parentElement.parentElement.id;

  let jobsSelected = getJobsLocalStorage();
  let listJobs = Array.from(document.getElementById("listJobs").children);

  jobsSelected.map((job) => {
    if (job.id === +idCardPressed) {
      let buttonJobSelected =
        listJobs[+idCardPressed].childNodes[7].childNodes[3];
      buttonJobSelected.value = "Candidatar";

      let indexCardRemove = jobsSelected.findIndex(
        (elemento) => elemento.id === +idCardPressed
      );

      jobsSelected.splice(indexCardRemove, 1);
      renderJobsSelected(jobsSelected);
    }
  });

  localStorage.setItem("@VagasSelecionadas", JSON.stringify(jobsSelected));
}

export { getJobsLocalStorage, apply, removeJob };
