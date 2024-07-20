const clearInput = () => {
  const input = document.querySelector('.todo-input');
  input.value = '';
  input.placeholder = 'Enter new todo title...';
};

const closeTodoForm = () => {
  const closeBtn = document.querySelector('.close-todo-form');
  const form = document.getElementById('form-overlay');

  if (closeBtn && form) {
    closeBtn.addEventListener('click', () => {
      console.log('Close new todo form button clicked!');
      form.classList.toggle('show-overlay');
      clearInput();
    });
  } else {
    console.error('Close button or form not found!');
  }
};

const renderTodoForm = () => {
  const form = document.createElement('div');
  form.classList.add('todo-form', 'form-styling');

  const title = document.createElement('h3');
  title.classList.add('todo-title');
  title.textContent = 'Todo Title:';
  form.appendChild(title);

  const close = document.createElement('span');
  close.classList.add('close-todo-form');
  close.textContent = 'x';
  form.appendChild(close);

  const todoTitle = document.createElement('input');
  todoTitle.classList.add('todo-input');
  todoTitle.type = 'text';
  todoTitle.placeholder = 'Enter todo title...';
  form.appendChild(todoTitle);

  const todoDate = document.createElement('input');
  todoDate.classList.add('todo-date');
  todoDate.type = 'date';
  form.appendChild(todoDate);

  const todoPriority = document.createElement('label');
  todoPriority.htmlFor = 'priority-select';
  form.appendChild(todoPriority);

  const todoSelectPriority = document.createElement('select');
  todoSelectPriority.name = 'priority';
  todoSelectPriority.id = 'prioritySelect';
  const priorityPlaceholder = document.createElement('option');
  priorityPlaceholder.value = '';
  priorityPlaceholder.text = 'Please choose an option';
  todoSelectPriority.appendChild(priorityPlaceholder);
  const lowPriority = document.createElement('option');
  lowPriority.value = 'low';
  lowPriority.text = 'Low';
  todoSelectPriority.appendChild(lowPriority);
  const highPriority = document.createElement('option');
  highPriority.value = 'high';
  highPriority.text = 'High';
  todoSelectPriority.appendChild(highPriority);
  form.appendChild(todoSelectPriority);

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

export { closeTodoForm, renderTodoForm };
