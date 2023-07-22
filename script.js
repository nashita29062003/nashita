// Get the necessary HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const errorDiv = document.getElementById('error');

// Array to store the tasks
let tasks = [];

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    displayError('Task cannot be empty');
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText
  };

  tasks.push(task);
  renderTask(task);

  taskInput.value = '';
  errorDiv.textContent = '';
}

// Function to render a task
function renderTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task.text}</span>
    <button class="editTaskBtn">Edit</button>
    <button class="deleteTaskBtn">Delete</button>
  `;

  const editBtn = li.querySelector('.editTaskBtn');
  const deleteBtn = li.querySelector('.deleteTaskBtn');

  editBtn.addEventListener('click', () => editTask(task));
  deleteBtn.addEventListener('click', () => deleteTask(task));

  taskList.appendChild(li);
}

// Function to edit a task
function editTask(task) {
  const span = taskList.querySelector(`[data-task-id="${task.id}"] span`);
  const newText = prompt('Edit the task:', task.text);

  if (newText !== null) {
    task.text = newText.trim();
    span.textContent = task.text;
  }
}

// Function to delete a task
function deleteTask(task) {
  tasks = tasks.filter(t => t.id !== task.id);
  taskList.removeChild(taskList.querySelector(`[data-task-id="${task.id}"]`));
}

// Function to display an error message
function displayError(message) {
  errorDiv.textContent = message;
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Event listener for the Enter key in the task input field
taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});
