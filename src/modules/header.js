const renderHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.classList.add('header-title');
  h1.textContent = 'Todo List';
  header.appendChild(h1);
  return header;
};

export default renderHeader;
