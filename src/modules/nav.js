import { defaultProject } from './projects';

const createProject = () => {
  const existingProjects = document.createElement('li');
  existingProjects.classList.add(`${defaultProject[0]}`);
  existingProjects.textContent = `${defaultProject[0]}`;

  // TODO: render existing projects from array

  return existingProjects;
};

const addProjectBtn = () => {
  const addProject = document.querySelector('.add-new-project');
  const form = document.getElementById('form-overlay');

  if (addProject && form) {
    addProject.addEventListener('click', () => {
      console.log('Add new project button clicked!');
      form.classList.toggle('show-overlay');
    });
  } else {
    console.error('Add Project button or form not found!');
  }
};

const hamburgerMenu = () => {
  const menu = document.querySelector('menu');
  const displayNav = document.querySelector('nav');

  if (menu && displayNav) {
    displayNav.addEventListener('click', () => {
      if (displayNav.style.display === 'none') {
        displayNav.style.display = 'flex';
        displayNav.classList.toggle('active');
      } else {
        displayNav.style.display = 'none';
      }
    });
  } else {
    console.error('Hamburger menu or navigation display not found!');
  }
};

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

export { addProjectBtn, hamburgerMenu, renderNav };
