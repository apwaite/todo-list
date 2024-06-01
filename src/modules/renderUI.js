// TODO: import UI elements
import { hamburgerMenu, renderHeader } from './header';
import renderMain from './main';
import { addNewProjectBtn, renderNav } from './nav';
import renderTodos from './todos';
import { projects, loadDefault } from './projects';
import renderFooter from './footer';
import {
  closeProjectForm,
  addProjectBtn,
  renderProjectForm,
} from './newProjectForm';

const createProjects = (array) => {
  const links = document.querySelector('.links');

  if (links) {
    array.forEach((project) => {
      const existingProjects = document.createElement('li');
      existingProjects.classList.add('projects');
      existingProjects.textContent = project;
      links.appendChild(existingProjects);
    });
  } else {
    console.error('Links element not found!');
  }
};

function renderUI() {
  // Append rendered elements to DOM
  const content = document.getElementById('content');
  content.appendChild(renderHeader());
  content.appendChild(renderMain());
  content.appendChild(renderFooter());

  const main = document.querySelector('.main');
  main.appendChild(renderNav());
  main.appendChild(renderTodos());

  const form = document.getElementById('form-overlay');
  form.appendChild(renderProjectForm());

  // Add event listeners
  addNewProjectBtn();
  hamburgerMenu();
  addProjectBtn();
  closeProjectForm();

  createProjects(projects);

  // Load placeholder projects from projects.js
  loadDefault();

  // TOD: Load existing projects from localStorage
}

export default renderUI;
