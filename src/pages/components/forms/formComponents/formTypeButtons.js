import replaceForm from "../formManipulation/replaceForm";

export default function formTypeButtons() {
    let typeButtons = document.createElement('div');
    typeButtons.classList.add('new-type-buttons-container');

    let taskButton = document.createElement('button');
    taskButton.classList.add('new-type-button');
    taskButton.innerHTML = 'Task';
    taskButton.addEventListener('click', function () {
        replaceForm('task');
    });
    typeButtons.appendChild(taskButton);

    let projectButton = document.createElement('button');
    projectButton.classList.add('new-type-button');
    projectButton.innerHTML = 'Project';
    projectButton.addEventListener('click', function () {
        replaceForm('project');
    });
    typeButtons.appendChild(projectButton);

    return typeButtons;
}