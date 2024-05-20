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
  const addNewProject = document
    .querySelector('.add-new-project')
    .addEventListerner('click', () => add);
  const hamburgerMenu = document.querySelector('.menu');
  const displayNav = document.querySelector('nav');

  // Add new project option on click and toggle on off
  addNewProject.addEventListener('click', () => {
    console.log(todos);
    if (addNewProject.style.display === 'none') {
      addNewProject.style.display = 'flex';
    } else {
      addNewProject.style.display = 'none';
    }

    // todos.removeChild(todos.firstChild);
    // todos.appendChild(newProjectForm());
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

function renderUI() {
  const content = document.getElementById('content');
  const form = document.getElementById('new-project');
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
}

export default renderUI;
