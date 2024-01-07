import './forms.css'

import formHeader from './formComponents/editFormHeader'
import editTaskFormStorage from './formValueStorage/editTaskFormStorage';

export default function editTaskForm(task) {
    let elementsArray = Array.from(document.body.getElementsByTagName('*'));
    for(let i = 0 ; i < elementsArray.length ; i++) {
        elementsArray[i].classList.add('background-filter');
    }

    let editTaskFormContainer = document.createElement('div');
    editTaskFormContainer.classList.add('new-form-container');

    let editTaskForm = document.createElement('form');
    editTaskForm.classList.add('new-task-form');

    let titleInput = document.createElement('input');
    titleInput.value = task.title;
    titleInput.name = 'title';
    titleInput.id = 'task-title';
    titleInput.required = true;
    editTaskForm.appendChild(titleInput);

    let descriptionInput = document.createElement('textarea');
    descriptionInput.value = task.description;
    descriptionInput.name = 'description';
    descriptionInput.id = 'task-description';
    descriptionInput.required = true;
    editTaskForm.appendChild(descriptionInput);

    let dueDateInput = document.createElement('input');
    dueDateInput.value = task.dueDate;
    dueDateInput.type = "date";
    dueDateInput.name = 'duedate';
    dueDateInput.id = 'task-duedate';
    dueDateInput.required = true;
    dueDateInput.min = new Date().toISOString().split('T')[0];
    editTaskForm.appendChild(dueDateInput);

    let priorityInput = document.createElement('div');
    priorityInput.classList.add('priority-buttons');

    let lowPriorityInput = document.createElement('input');
    lowPriorityInput.id = 'low-priority';
    lowPriorityInput.type = "radio";
    if(task.priority === 'low-priority') lowPriorityInput.checked = true;
    lowPriorityInput.name = "priorities";
    lowPriorityInput.required = true;
    let lowPriorityInputLabel = document.createElement('label')
    lowPriorityInputLabel.setAttribute('for', 'low-priority');
    lowPriorityInputLabel.innerHTML = "Low";
    priorityInput.appendChild(lowPriorityInput);
    priorityInput.appendChild(lowPriorityInputLabel);

    let mediumPriorityInput = document.createElement('input');
    mediumPriorityInput.id = 'medium-priority';
    mediumPriorityInput.type = "radio";
    if(task.priority === 'medium-priority') mediumPriorityInput.checked = true;
    mediumPriorityInput.value = "medium";
    mediumPriorityInput.name = "priorities";
    mediumPriorityInput.required = true;
    let mediumPriorityInputLabel = document.createElement('label')
    mediumPriorityInputLabel.setAttribute('for', 'medium-priority');
    mediumPriorityInputLabel.innerHTML = "Medium";
    priorityInput.appendChild(mediumPriorityInput);
    priorityInput.appendChild(mediumPriorityInputLabel);

    let highPriorityInput = document.createElement('input');
    highPriorityInput.id = 'high-priority';
    highPriorityInput.type = "radio";
    if(task.priority === 'high-priority') highPriorityInput.checked = true;
    highPriorityInput.name = "priorities";
    highPriorityInput.required = true;
    let highPriorityInputLabel = document.createElement('label')
    highPriorityInputLabel.setAttribute('for', 'high-priority');
    highPriorityInputLabel.innerHTML = "High";
    priorityInput.appendChild(highPriorityInput);
    priorityInput.appendChild(highPriorityInputLabel);

    editTaskForm.appendChild(priorityInput);

    let submitButton = document.createElement('input');
    submitButton.classList.add('new-form-submit-button');
    submitButton.type = 'submit';
    submitButton.addEventListener('click', function() {
        editTaskFormStorage(task.title);
    });
    editTaskForm.appendChild(submitButton);

    editTaskFormContainer.appendChild(formHeader());
    editTaskFormContainer.appendChild(editTaskForm);

    return editTaskFormContainer;
}