const renderTodoForm = () => {
  const form = document.createElement('div');
  form.classList.add('todo-form', 'form-styling');

  const title = document.createElement('h3');
  title.classList.add('todo-title');
  title.textContent = 'Todo Title:';
  form.appendChild(title);

  const close = document.createElement('span');
  close.classList.add('close-form');
  close.textContent = 'x';
  form.appendChild(close);

  const input = document.createElement('input');
  input.classList.add('todo-input');
  input.type = 'text';
  input.placeholder = 'Enter project title...';
  form.appendChild(input);

  const btns = document.createElement('div');
  btns.classList.add('button-container');
  form.appendChild(btns);

  const clearBtn = document.createElement('button');
  clearBtn.classList.add('clear-todo-btn');
  clearBtn.textContent = 'Clear';
  btns.appendChild(clearBtn);

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-todo-btn');
  addBtn.textContent = 'Add';
  btns.appendChild(addBtn);

  return form;
};

export default renderTodoForm;
