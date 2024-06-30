console.log('projects connected!');

const projects = ['Study', 'Shopping'];

const addProject = (projectName) => {
  projects.push(projectName);
  console.log('Project added: ', projectName);
  console.log('Current projects: ', projects);
};

const updateProjects = () => {
  const projectList = document.querySelector('.project-list');
  if (projectList) {
    // Store last item added to the array using destructuring
    const [lastItem] = projects.slice(-1);
    const lastItemIndex = projects.length - 1;
    const updateProject = document.createElement('button');
    updateProject.classList.add('project-btn');
    updateProject.dataset.id = lastItemIndex;
    updateProject.textContent = lastItem;
    projectList.appendChild(updateProject);
  } else {
    console.error('project-list element not found!');
  }
};

export { projects, addProject, updateProjects };
