import './components.css'

import editIconUrl from '../../images/edit.png'
import deleteIconUrl from '../../images/delete.png'
import detailsBox from './detailsBox';
import deleteTask from './taskManipulation/deleteTask';
import editTaskForm from './forms/editTaskForm';
import homePage from '../homePage';
import updateEventListeners from '../..';

export default function taskDisplay(task) {
    let taskDisplay = document.createElement('div');
    taskDisplay.classList.add('task-container');

    let taskNameContainer = document.createElement('div');
    taskNameContainer.classList.add('task-name');
    taskNameContainer.innerHTML = task.title;
    taskDisplay.appendChild(taskNameContainer);

    let taskDateContainer = document.createElement('div');
    taskDateContainer.classList.add('task-date');
    taskDateContainer.innerHTML = task.dueDate;
    taskDisplay.appendChild(taskDateContainer);

    let taskDetailsButton = document.createElement('button');
    taskDetailsButton.classList.add('task-details');
    taskDetailsButton.innerHTML = "Details";
    taskDetailsButton.addEventListener('click', function() {
        document.body.appendChild(detailsBox(task));
    });
    taskDisplay.appendChild(taskDetailsButton);

    let taskEditButton = document.createElement('button');
    taskEditButton.classList.add('task-button');
    let taskEditButtonIcon = document.createElement('img');
    taskEditButtonIcon.classList.add('task-button-icon');
    taskEditButtonIcon.src = editIconUrl;
    taskEditButton.addEventListener('click', function() {
        document.body.appendChild(editTaskForm(task));
    });
    taskEditButton.appendChild(taskEditButtonIcon);
    taskDisplay.appendChild(taskEditButton);

    let taskDeleteButton = document.createElement('button');
    taskDeleteButton.classList.add('task-button');
    let taskDeleteButtonIcon = document.createElement('img');
    taskDeleteButtonIcon.classList.add('task-button-icon');
    taskDeleteButtonIcon.src = deleteIconUrl;
    taskDeleteButton.addEventListener('click', function() {
        deleteTask(task.title);
        document.body.innerHTML = '';
        document.body.appendChild(homePage());
        updateEventListeners();
    });
    taskDeleteButton.appendChild(taskDeleteButtonIcon);
    taskDisplay.appendChild(taskDeleteButton);

    return taskDisplay;
}