document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');


  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    // Create a new list item
    const li = document.createElement('li');
    li.classList.add('todo-item');
    

    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button" title="Delete">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-8z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H2.5a1 1 0 1 1 0-2H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM5 4v9h6V4H5z"/>
        </svg>
      </button>
    `;
    
    // Toggle task completion on clicking task text (exclude delete button)
    li.addEventListener('click', (e) => {
      if (e.target.closest('.delete-button') === null) {
        li.classList.toggle('completed');
      }
    });
    
    // Delete task on clicking the delete button
    li.querySelector('.delete-button').addEventListener('click', (e) => {
      e.stopPropagation();
      todoList.removeChild(li);
    });
    
    // Append the new task and reset input
    todoList.appendChild(li);
    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);
  
  // Also add task when the Enter key is pressed in the input field
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});


