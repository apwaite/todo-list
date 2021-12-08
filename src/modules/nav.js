// TODO: add default project to nav

// import newProject from './todos';

// const defaultProject = newProject('');

import { defaultProject } from './projects';

const createProject = () => {
  const existingProjects = document.createElement('li');
  existingProjects.classList.add(`${defaultProject[0]}`);
  existingProjects.textContent = `${defaultProject[0]}`;

  return existingProjects;
};

// TODO: Add logic to Add New Project button

const renderNav = (existingProjects) => {
  const nav = document.createElement('nav');

  const links = document.createElement('ul');
  links.classList.add('links');
  nav.appendChild(links);

  const projectsTitle = document.createElement('h2');
  projectsTitle.classList.add('projects-title');
  projectsTitle.textContent = 'Projects';
  links.appendChild(projectsTitle);

  const existingProjects = document.createElement('li');
  existingProjects.classList.add('existing-projects');
  existingProjects.textContent = 'Existing Project Placeholder';
  links.appendChild(existingProjects);

  const addNewProject = document.createElement('li');
  addNewProject.classList.add('add-new-project');
  addNewProject.textContent = '+ Add New Project';
  links.appendChild(addNewProject);

  return nav;
};

export default renderNav;
