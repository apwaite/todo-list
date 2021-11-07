const newProjectForm = () => {
  const form = document.createElement('div');
  form.classList.add('form');
  // TODO: add new project form
  const projectName = document.createElement('h3');
  projectName.classList.add('project-name');
  projectName.textContent = 'Project Title:';
  form.appendChild(projectName);

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
