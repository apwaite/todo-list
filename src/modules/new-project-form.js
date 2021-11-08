const newProjectForm = () => {
  const form = document.createElement('div');
  form.classList.add('form');
  // TODO: add new project form
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'Project Title:';
  form.appendChild(projectTitle);

  const projectInput = document.createElement('input');
  projectInput.classList.add('project-input');
  form.appendChild(projectInput);

  const addNewBtn = document.createElement('button');
  addNewBtn.classList.add('add-new-btn');
  addNewBtn.textContent = 'Add';
  form.appendChild(addNewBtn);

  return form;
};

export default newProjectForm;
