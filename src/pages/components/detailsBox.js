import './components.css';

import homePage from '../homePage';
import updateEventListeners from '../..';

export default function detailsBox(task) {
    let elementsArray = Array.from(document.body.getElementsByTagName('*'));
    for(let i = 0 ; i < elementsArray.length ; i++) {
        elementsArray[i].classList.add('background-filter');
    }

    let detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    
    let exitButton = document.createElement('button');
    exitButton.classList.add('details-box-exit-button');
    exitButton.innerHTML = 'X';
    exitButton.addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.appendChild(homePage());
        updateEventListeners();
    })
    detailsContainer.appendChild(exitButton);

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('details-box-child');
    titleDiv.innerHTML = "Title: " + task.title;
    detailsContainer.appendChild(titleDiv);

    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('details-box-child');
    descriptionDiv.innerHTML = "Description: " + task.description;
    detailsContainer.appendChild(descriptionDiv);

    let dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('details-box-child');
    dueDateDiv.innerHTML = "Due Date: " + task.dueDate;
    detailsContainer.appendChild(dueDateDiv);

    let priorityDiv = document.createElement('div');
    priorityDiv.classList.add('details-box-child');
    priorityDiv.innerHTML = "Priority: " + task.priority.substring(0,task.priority.indexOf('-'));
    detailsContainer.appendChild(priorityDiv);

    return detailsContainer;
}