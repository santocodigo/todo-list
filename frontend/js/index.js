const form = document.getElementById('form');
let id = localStorage.getItem('id') || 1;
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const ul = document.getElementById('ul');

form.addEventListener('submit', e => {
  e.preventDefault();

  const task = Object.create(null);
  task.description = e.target.description.value.trim();

  addTask(task);
  form.reset();
  loadTasks();
});

function addTask(task) {
  task.id = Number(id);
  id++;
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('id', id);
}

function loadTasks() {
  ul.innerHTML = '';

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (tasks.length === 0) {
    ul.textContent = '- Nenhuma Tarefa Adicionada -';
  } else {
    tasks.forEach(task => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const spanDone = document.createElement('span');
  
      span.textContent = task.description;
  
      spanDone.setAttribute('class', 'done');
      spanDone.setAttribute('onclick', `removeTask(${task.id})`);
  
      li.append(span, spanDone);
      ul.append(li);
    });
  }
}

function removeTask(id) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const updatedTasks = tasks.filter(task => task.id !== id);

  localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  loadTasks();
}

loadTasks();