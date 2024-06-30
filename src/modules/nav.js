// import { updateProjects } from './projects';

const renderExistingProjects = (array) => {
  const defaultProjects = document.querySelector('.project-list');

  if (defaultProjects) {
    array.forEach((project, index) => {
      const existingProjects = document.createElement('button');
      existingProjects.classList.add('project-btn');
      existingProjects.textContent = project;
      existingProjects.dataset.id = index;
      defaultProjects.appendChild(existingProjects);
    });
  } else {
    console.error('defaultProjects element not found!');
  }
};

const addNewProjectBtn = () => {
  const addProject = document.querySelector('.new-project-btn');
  const form = document.getElementById('form-overlay');
  const projectForm = document.querySelector('.project-form');
  const todoForm = document.querySelector('.todo-form');

  if (addProject && form) {
    addProject.addEventListener('click', () => {
      console.log('Add new project button clicked!');
      form.classList.toggle('show-overlay');
      todoForm.style.display = 'none';
      projectForm.style.display = 'flex';
    });
  } else {
    console.error('Add Project button or form not found!');
  }
};

const renderNav = () => {
  const nav = document.createElement('nav');

  const defaultProjects = document.createElement('div');
  defaultProjects.classList.add('default-projects');
  nav.appendChild(defaultProjects);

  const projectsTitle = document.createElement('h2');
  projectsTitle.classList.add('projects-title');
  projectsTitle.textContent = 'Projects';
  nav.appendChild(projectsTitle);

  const projectList = document.createElement('div');
  projectList.classList.add('project-list');
  nav.appendChild(projectList);

  const addNewProject = document.createElement('button');
  addNewProject.classList.add('new-project-btn');
  addNewProject.textContent = '+ Add New Project';
  nav.appendChild(addNewProject);

  return nav;
};

export { addNewProjectBtn, renderExistingProjects, renderNav };
