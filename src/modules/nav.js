import { defaultProject } from './projects';

const createProject = () => {
  const existingProjects = document.createElement('li');
  existingProjects.classList.add(`${defaultProject[0]}`);
  existingProjects.textContent = `${defaultProject[0]}`;

  // TODO: render existing projects from array

  return existingProjects;
};

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

export default renderNav;
