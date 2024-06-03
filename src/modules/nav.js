// import { updateProjects } from './projects';

const renderExistingProjects = (array) => {
  const links = document.querySelector('.links');

  if (links) {
    array.forEach((project) => {
      const existingProjects = document.createElement('li');
      existingProjects.classList.add('projects');
      existingProjects.textContent = project;
      links.appendChild(existingProjects);
    });
  } else {
    console.error('Links element not found!');
  }
};

const addNewProjectBtn = () => {
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

const renderNav = () => {
  const nav = document.createElement('nav');

  const links = document.createElement('ul');
  links.classList.add('links');
  nav.appendChild(links);

  const projectsTitle = document.createElement('h2');
  projectsTitle.classList.add('projects-title');
  projectsTitle.textContent = 'Projects';
  links.appendChild(projectsTitle);

  const addNewProject = document.createElement('li');
  addNewProject.classList.add('add-new-project');
  addNewProject.textContent = '+ Add New Project';
  links.appendChild(addNewProject);

  return nav;
};

export { addNewProjectBtn, renderExistingProjects, renderNav };
