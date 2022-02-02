// TODO: Add logic to Add New Project button

// function newProjectButton() {
//   const button = document.querySelector('.add-new-btn');

//   button.addEventListener('click', () => {
//     console.log('Hi');
//   });
// }

const newProjectForm = () => {
  const form = document.createElement('div');

  // TODO: store existing projects in array

  form.classList.add('form');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'Project Title:';
  form.appendChild(projectTitle);

  const projectInput = document.createElement('input');
  projectInput.classList.add('project-input');
  projectInput.placeholder = 'Enter new project title...';
  form.appendChild(projectInput);

  const addNewBtn = document.createElement('button');
  addNewBtn.classList.add('add-new-btn');
  addNewBtn.textContent = 'Add';
  form.appendChild(addNewBtn);

  return form;
};

export default newProjectForm;
