// TODO: import UI elements
import renderHeader from './header';
import renderNav from './nav';

// TODO: render UI

function renderUI() {
  const content = document.getElementById('content');
  // TODO: render header section
  content.appendChild(renderHeader());
  // TODO: render navigation section
  content.appendChild(renderNav());
  // TODO: render Todo section

  // TODO: add existing projects from localStorage to navigation section

  // TODO: add Todos from localStorage (if any) to Todo section
}

export default renderUI;
