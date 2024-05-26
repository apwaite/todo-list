import { defaultProject } from './projects';

const createProject = () => {
  const existingProjects = document.createElement('li');
  existingProjects.classList.add(`${defaultProject[0]}`);
  existingProjects.textContent = `${defaultProject[0]}`;

  // TODO: render existing projects from array

  return existingProjects;
};

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

// TODO: add default project to nav
const renderNav = () => {
  const nav = document.createElement('nav');

  const links = document.createElement('ul');
  links.classList.add('links');
  nav.appendChild(links);

  const projectsTitle = document.createElement('h2');
  projectsTitle.classList.add('projects-title');
  projectsTitle.textContent = 'Projects';
  links.appendChild(projectsTitle);

  const placeholderProjects = document.createElement('li');
  placeholderProjects.classList.add('existing-projects');
  placeholderProjects.textContent = 'Existing Project Placeholder';
  links.appendChild(placeholderProjects);

  const addNewProject = document.createElement('li');
  addNewProject.classList.add('add-new-project');
  addNewProject.textContent = '+ Add New Project';
  links.appendChild(addNewProject);

  return nav;
};

export { createNavEvents, renderNav };
