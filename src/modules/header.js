const renderHeader = () => {
  const header = document.createElement('header');

  const icon = document.createElement('h1');
  icon.innerHTML = '<i class="fas fa-clipboard-list"></i>';
  header.appendChild(icon);

  const h1 = document.createElement('h1');
  h1.classList.add('header-title');
  h1.innerText = 'Todo List';
  header.appendChild(h1);

  const menu = document.createElement('ul');
  menu.classList.add('menu');
  menu.innerHTML = '<i class="fas fa-bars"></i>';
  header.appendChild(menu);

  return header;
};

export default renderHeader;
