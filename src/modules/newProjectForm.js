import { addProject } from './projects';

const closeProjectForm = () => {
  const closeBtn = document.querySelector('.close-form');
  const form = document.getElementById('form-overlay');
  const input = document.querySelector('.project-input');

  if (closeBtn && form) {
    closeBtn.addEventListener('click', () => {
      console.log('Close new project button clicked!');
      form.classList.toggle('show-overlay');
      input.placeholder = 'Enter new project title...';
    });
  } else {
    console.error('Close button or form not found!');
  }
};

const addProjectBtn = () => {
  const addBtn = document.querySelector('.add-new-btn');
  const input = document.querySelector('.project-input');

  if (addBtn && input) {
    addBtn.addEventListener('click', () => {
      // Take input value and trim any excess whitespace
      const projectName = input.value.trim();
      addProject(projectName);
      // Clear the input field
      input.value = '';
      input.placeholder = 'Enter new project title...';
    });
  } else {
    console.error('Add button or project input not found!');
  }
};

const renderProjectForm = () => {
  const form = document.createElement('div');
  form.classList.add('form', 'form-styling');

  const title = document.createElement('h3');
  title.classList.add('project-title');
  title.textContent = 'Project Title:';
  form.appendChild(title);

  const close = document.createElement('span');
  close.classList.add('close-form');
  close.textContent = 'x';
  form.appendChild(close);

  const input = document.createElement('input');
  input.classList.add('project-input');
  input.type = 'text';
  input.placeholder = 'Enter project title...';
  form.appendChild(input);

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-new-btn');
  addBtn.textContent = 'Add';
  form.appendChild(addBtn);

  // TODO: Store contents of input in an array

  return form;
};

export { closeProjectForm, addProjectBtn, renderProjectForm };
