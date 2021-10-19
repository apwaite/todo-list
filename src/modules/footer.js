const renderFooter = () => {
  const footer = document.createElement('footer');

  const madeBy = document.createElement('p');
  madeBy.classList.add('made-by');
  madeBy.textContent = 'Made with ❤️ by Andrew';
  footer.appendChild(madeBy);

  const link = document.createElement('a');
  link.href = 'https://github.com/apwaite';
  link.target = '_blank';
  madeBy.appendChild(link);

  const icon = document.createElement('i');
  icon.classList.add('fab', 'fa-github');
  link.appendChild(icon);

  return footer;
};

export default renderFooter;
