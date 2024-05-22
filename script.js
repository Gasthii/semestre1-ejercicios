document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        const answer = this.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showConfirmationMessage();
  });
  
  function showConfirmationMessage() {
    const message = document.getElementById('confirmationMessage');
    message.style.display = 'block';
    setTimeout(() => {
      message.style.display = 'none';
    }, 3000);
  }

  function buyProduct(button) {
    alert('Has comprado el artículo');
    button.disabled = true;
    button.textContent = 'Comprado';
  }
  
  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
  });
  
  function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      
      const li = document.createElement('li');
      li.textContent = taskText;
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '❌';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = function() {
        taskList.removeChild(li);
      };
      
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus();
    }
  }
  