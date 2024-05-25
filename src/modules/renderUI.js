// TODO: import UI elements
import renderHeader from './header';
import renderMain from './main';
import renderNav from './nav';
import renderTodos from './todos';
import { loadDefault, projects } from './projects';
import renderFooter from './footer';
import renderProjectForm from './new-project-form';

// TODO: add Nav events
function createNavEvents() {
  const todos = document.querySelector('.todos');
  const addNewProject = document.querySelector('.add-new-project');
  const hamburgerMenu = document.querySelector('.menu');
  const displayNav = document.querySelector('nav');
  const form = document.getElementById('form-overlay');

  //
  // addNewProject.addEventListener('click', () => {

  //   // todos.removeChild(todos.firstChild);
  //   // todos.appendChild(newProjectForm());
  // });
  // Add new project popup to toggle on and off on click
  addNewProject.addEventListener('click', () => {
    console.log('Add new project button clicked!');
    form.classList.toggle('show-overlay');
  });
  // Add Hamburger menu on smaller displays and toggle it on/off
  hamburgerMenu.addEventListener('click', () => {
    if (displayNav.style.display === 'none') {
      displayNav.style.display = 'flex';
      displayNav.classList.toggle('active');
    } else {
      displayNav.style.display = 'none';
    }
  });
}

function closeNewProjectForm() {
  const closeBtn = document.querySelector('.close-form');
  const form = document.getElementById('form-overlay');

  closeBtn.addEventListener('click', () => {
    console.log('Close new project button clicked!');
    form.classList.toggle('show-overlay');
  });
}

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
