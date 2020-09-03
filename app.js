// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task listener
    form.addEventListener('submit', addTask);
    // Delete task listener
    taskList.addEventListener('click', deleteTask);
    // Clear tasks listener
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks listener
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Clear input
    taskInput.value = '';
    e.preventDefault();
    }
}

// Delete task
function deleteTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Remove Task?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

}

// Clear tasks function
function clearTasks() {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks function
function filterTasks() {
    
}