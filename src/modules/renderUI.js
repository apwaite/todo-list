// TODO: import UI elements
import renderHeader from './header';
import renderMain from './main';
import renderNav from './nav';
import renderTodos from './todos';
import { loadDefault } from './projects';
import renderFooter from './footer';
import newProjectForm from './new-project-form';

// TODO: add Nav events
function createNavEvents() {
  const todos = document.querySelector('.todos');
  const addNewProject = document.querySelector('.add-new-project');

  const hamburgerMenu = document.querySelector('.menu');
  const displayNav = document.querySelector('nav');

  addNewProject.addEventListener('click', () => {
    console.log(todos);
    todos.removeChild(todos.firstChild);
    todos.appendChild(newProjectForm());
  });

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
  content.appendChild(renderHeader());
  content.appendChild(renderMain());
  const main = document.querySelector('.main');
  main.appendChild(renderNav());
  main.appendChild(renderTodos());
  // TODO: add existing projects from localStorage to navigation section
  loadDefault();
  // TODO: add Todos from localStorage (if any) to Todo section
  content.appendChild(renderFooter());
  createNavEvents();
}

export default renderUI;
