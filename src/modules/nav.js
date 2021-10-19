// TODO: add default project to nav

// import newProject from './todos';

// const defaultProject = newProject('');

const renderNav = () => {
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
  addNewProject.textContent = 'Add New Project';
  links.appendChild(addNewProject);

  return nav;
};

export default renderNav;
