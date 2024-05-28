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

// TODO: Add new project from input field
// const addProjectBtn = () => {
//   const addBtn = document.querySelector('add-new-btn');
//   const input = document.querySelector('.project-input');
//   const projects = [];

//   if (addBtn && input) {
//     addBtn.addEventListener('click', () => {
//       // Take input value and trim any excess whitespace
//       const projectName = input.value.trim();
//       // Check whether input is empty
//       if (projectName) {
//         projects.push(projectName);
//         console.log('Project added: ', projectName);
//         console.log('Current projects: ', projects);
//       } else {
//         console.error('Project name cannot be empty');
//       }
//     });
//   } else {
//     console.error('Add button or close button not found!');
//   }
// };

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

export { closeProjectForm, renderProjectForm };
