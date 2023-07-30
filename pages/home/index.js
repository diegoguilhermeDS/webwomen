/* Desenvolva sua lógica aqui... */
import { renderJobs, renderJobsSelected } from "../../scripts/render.js";
import { jobsData } from "./jobsData.js";
import { getJobsLocalStorage } from "../../scripts/functionsButton.js";

renderJobs(jobsData);
renderJobsSelected(getJobsLocalStorage());