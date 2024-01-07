import './forms.css'
import formHeader from './formComponents/newFormHeader'
import formTypeButtons from './formComponents/formTypeButtons'

import projectTaskFormStorage from './formValueStorage/projectTaskFormStorage';

export default function newProjectTaskForm(projectName) {
    let elementsArray = Array.from(document.body.getElementsByTagName('*'));
    for(let i = 0 ; i < elementsArray.length ; i++) {
        elementsArray[i].classList.add('background-filter');
    }

    let newTaskFormContainer = document.createElement('div');
    newTaskFormContainer.classList.add('new-form-container');

    let newTaskForm = document.createElement('form');
    newTaskForm.classList.add('new-task-form');

    let titleInput = document.createElement('input');
    titleInput.placeholder = 'Title:'
    titleInput.name = 'title';
    titleInput.id = 'task-title';
    titleInput.required = true;
    newTaskForm.appendChild(titleInput);

    let descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'Details:';
    descriptionInput.name = 'description';
    descriptionInput.id = 'task-description';
    descriptionInput.required = true;
    newTaskForm.appendChild(descriptionInput);

    let dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.name = 'duedate';
    dueDateInput.id = 'task-duedate';
    dueDateInput.required = true;
    newTaskForm.appendChild(dueDateInput);

    let priorityInput = document.createElement('div');
    priorityInput.classList.add('priority-buttons');

    let lowPriorityInput = document.createElement('input');
    lowPriorityInput.id = 'low-priority';
    lowPriorityInput.type = "radio";
    lowPriorityInput.value = "low";
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
    highPriorityInput.value = "High";
    highPriorityInput.name = "priorities";
    highPriorityInput.required = true;
    let highPriorityInputLabel = document.createElement('label')
    highPriorityInputLabel.setAttribute('for', 'high-priority');
    highPriorityInputLabel.innerHTML = "High";
    priorityInput.appendChild(highPriorityInput);
    priorityInput.appendChild(highPriorityInputLabel);

    newTaskForm.appendChild(priorityInput);

    let submitButton = document.createElement('input');
    submitButton.classList.add('new-form-submit-button');
    submitButton.type = 'submit';
    submitButton.addEventListener('click', function() {
        projectTaskFormStorage(projectName);
    });
    newTaskForm.appendChild(submitButton);

    newTaskFormContainer.appendChild(formHeader());
    newTaskFormContainer.appendChild(formTypeButtons());
    newTaskFormContainer.appendChild(newTaskForm);

    return newTaskFormContainer;
}