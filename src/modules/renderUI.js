// TODO: import UI elements
import renderHeader from './header';
import renderMain from './main';
import { createNavEvents, renderNav } from './nav';
import renderTodos from './todos';
import { loadDefault, projects } from './projects';
import renderFooter from './footer';
import { closeNewProjectForm, renderProjectForm } from './newProjectForm';

function renderUI() {
  const content = document.getElementById('content');
  const form = document.getElementById('form-overlay');
  content.appendChild(renderHeader());
  content.appendChild(renderMain());
  const main = document.querySelector('.main');
  main.appendChild(renderNav());
  main.appendChild(renderTodos());
  // TODO: add existing projects from localStorage to navigation section
  loadDefault();
  // TODO: add Todos from localStorage (if any) to Todo section
  content.appendChild(renderFooter());
  form.appendChild(renderProjectForm());
  createNavEvents();
  closeNewProjectForm();
}

export default renderUI;
