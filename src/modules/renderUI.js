// TODO: import UI elements
import { hamburgerMenu, renderHeader } from './header';
import renderMain from './main';
import { addNewProjectBtn, renderExistingProjects, renderNav } from './nav';
import { addTodoBtn, renderTodos, loadDefault } from './todos';
import { projects } from './projects';
import renderFooter from './footer';
import {
  closeProjectForm,
  clearFormBtn,
  addProjectBtn,
  renderProjectForm,
} from './newProjectForm';
import { closeTodoForm, renderTodoForm } from './newTodoForm';

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

  form.appendChild(renderTodoForm());

  // Add event listeners
  hamburgerMenu();
  addNewProjectBtn();
  clearFormBtn();
  addProjectBtn();
  closeProjectForm();
  addTodoBtn();
  closeTodoForm();

  // Load placeholder projects from projects.js
  renderExistingProjects(projects);

  // Load placeholder todos from projects.js
  loadDefault();

  // TODO: Load existing projects from localStorage
}

export default renderUI;
