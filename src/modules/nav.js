const renderNav = () => {
  const nav = document.createElement('nav');
  const links = document.createElement('ul');
  links.classList.add('links');
  nav.appendChild(links);
  const projectsTitle = document.createElement('h2');
  projectsTitle.classList.add('projects-title');
  projectsTitle.textContent = 'Projects';
  links.appendChild(projectsTitle);

  return nav;
};

export default renderNav;
