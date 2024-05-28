// TODO: import UI elements
import { hamburgerMenu, renderHeader } from './header';
import renderMain from './main';
import { addNewProjectBtn, renderNav } from './nav';
import renderTodos from './todos';
import { loadDefault, projects } from './projects';
import renderFooter from './footer';
import { closeProjectForm, renderProjectForm } from './newProjectForm';

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
  closeProjectForm();
  // addProjectBtn();

  // Load existing projects from localStorage
  loadDefault();
}

export default renderUI;
