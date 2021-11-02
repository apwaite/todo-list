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

  addNewProject.addEventListener('click', () => {
    console.log(todos);
    todos.removeChild(todos.firstChild);
  });
}

// TODO: render UI

function renderUI() {
  const content = document.getElementById('content');
  // TODO: render header section
  content.appendChild(renderHeader());
  content.appendChild(renderMain());
  const main = document.querySelector('.main');
  // TODO: render navigation section
  main.appendChild(renderNav());
  // TODO: render Todo section
  main.appendChild(renderTodos());
  // TODO: add existing projects from localStorage to navigation section
  loadDefault();
  // TODO: add Todos from localStorage (if any) to Todo section
  // TODO: add footer to page
  content.appendChild(renderFooter());
  createNavEvents();
}

export default renderUI;
