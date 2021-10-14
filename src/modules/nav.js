const renderNav = () => {
  const nav = document.createElement('nav');
  const links = document.createElement('ul');
  links.classList.add('links');
  nav.appendChild(links);

  return nav;
};

export default renderNav;
