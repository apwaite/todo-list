const newProjectForm = () => {
  const form = document.createElement('div');
  form.classList.add('form');
  // TODO: add new project form
  const projectName = document.createElement('h2');
  projectName.classList.add('project-name');
  projectName.textContent = 'Project Title:';
  form.appendChild(projectName);

  return form;
};

export default newProjectForm;
