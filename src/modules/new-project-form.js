const newProjectForm = () => {
  const form = document.createElement('div');
  form.classList.add('form');
  // TODO: add new project form
  const projectName = document.createElement('h3');
  projectName.classList.add('project-name');
  projectName.textContent = 'Project Title:';
  form.appendChild(projectName);

  const projectTitle = document.createElement('input');
  projectTitle.classList.add('project-title');
  form.appendChild(projectTitle);

  const addNewBtn = document.createElement('button');
  addNewBtn.classList.add('add-new-btn');
  addNewBtn.textContent = 'Add New Project';
  form.appendChild(addNewBtn);

  return form;
};

export default newProjectForm;
