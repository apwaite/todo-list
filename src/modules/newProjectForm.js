function closeNewProjectForm() {
  const closeBtn = document.querySelector('.close-form');
  const form = document.getElementById('form-overlay');
  const input = document.querySelector('.project-input');

  closeBtn.addEventListener('click', () => {
    console.log('Close new project button clicked!');
    form.classList.toggle('show-overlay');
    input.placeholder = 'Enter new project title...';
  });
}

const renderProjectForm = () => {
  const form = document.createElement('div');
  form.classList.add('form', 'form-styling');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'Project Title:';
  form.appendChild(projectTitle);

  const projectClose = document.createElement('span');
  projectClose.classList.add('close-form');
  projectClose.textContent = 'x';
  form.appendChild(projectClose);

  const projectInput = document.createElement('input');
  projectInput.classList.add('project-input');
  projectInput.placeholder = 'Enter new project title...';
  form.appendChild(projectInput);

  const addNewBtn = document.createElement('button');
  addNewBtn.classList.add('add-new-btn');
  addNewBtn.textContent = 'Add';
  form.appendChild(addNewBtn);

  // TODO: Store contents of projectInput in an array

  return form;
};

export { closeNewProjectForm, renderProjectForm };
