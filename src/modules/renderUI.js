// TODO: import UI elements
import renderHeader from './header';
import renderNav from './nav';
import { renderTodos, defaultProject } from './todos';

// TODO: render UI

function renderUI() {
  const content = document.getElementById('content');
  // TODO: render header section
  content.appendChild(renderHeader());
  // TODO: render navigation section
  content.appendChild(renderNav());
  // TODO: render Todo section
  content.appendChild(renderTodos());
  // TODO: add existing projects from localStorage to navigation section
  // const todos = document.querySelector('main');
  console.log(defaultProject);
  // TODO: add Todos from localStorage (if any) to Todo section
}

export default renderUI;
