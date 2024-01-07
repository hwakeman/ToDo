import './forms.css'

import formHeader from './formComponents/newFormHeader'
import formTypeButtons from './formComponents/formTypeButtons'

import projectFormStorage from './formValueStorage/projectFormStorage';
import projectPage from '../../projectPage';
import updateEventListeners from '../../..';

export default function newProjectForm() {
    let elementsArray = Array.from(document.body.getElementsByTagName('*'));
    for(let i = 0 ; i < elementsArray.length ; i++) {
        elementsArray[i].classList.add('background-filter');
    }

    let newProjectFormContainer = document.createElement('div');
    newProjectFormContainer.classList.add('new-form-container');

    let newProjectForm = document.createElement('form');
    newProjectForm.classList.add('new-project-form');

    let titleInput = document.createElement('input');
    titleInput.placeholder = 'Title:';
    titleInput.name = 'title';
    titleInput.id = 'project-title';
    titleInput.required = true;
    titleInput.maxLength = 20;
    newProjectForm.appendChild(titleInput);

    let submitButton = document.createElement('input');
    submitButton.classList.add('new-form-submit-button');
    submitButton.type = 'submit';
    newProjectForm.appendChild(submitButton);

    newProjectForm.addEventListener('submit', function() {
        projectFormStorage();
    });

    newProjectFormContainer.appendChild(formHeader());
    newProjectFormContainer.appendChild(formTypeButtons());
    newProjectFormContainer.appendChild(newProjectForm);

    return newProjectFormContainer;
}