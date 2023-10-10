function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;
  
    if (taskText.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    var taskList = document.getElementById('list');
    var taskItem = document.createElement('li');
    var removeButton = document.createElement('button');
    taskItem.textContent = taskText;
  
    taskList.appendChild(taskItem);
    taskList.appendChild(removeButton);
  
    // Clear the input field after adding the task
    taskInput.value = '';
  }