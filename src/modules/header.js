const renderHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'TODO';
  header.appendChild(h1);
  return header;
};

export default renderHeader;
