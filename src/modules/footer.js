const renderFooter = () => {
  const footer = document.createElement('footer');

  const madeBy = document.createElement('p');
  madeBy.classList.add('made-by');
  madeBy.innerText = 'Made with ';
  const emoji = document.createElement('p');
  emoji.classList.add('emoji');
  emoji.innerHTML = '&#10084;&#65039';
  const name = document.createElement('p');
  name.classList.add('name');
  name.innerText = 'by Andrew';

  footer.appendChild(madeBy);
  footer.appendChild(emoji);
  footer.appendChild(name);

  const link = document.createElement('a');
  link.href = 'https://github.com/apwaite';
  link.target = '_blank';
  name.appendChild(link);

  const icon = document.createElement('i');
  icon.classList.add('fab', 'fa-github');
  link.appendChild(icon);

  return footer;
};

export default renderFooter;
