import projectForm from '../newProjectForm'
import taskForm from '../newTaskForm'

export default function replaceForm(type) {
    let form = document.getElementsByClassName('new-form-container')[0];
    form.parentNode.removeChild(form);

    if(type === 'project') {
        document.body.appendChild(projectForm());
    }
    else if(type === 'task') {
        document.body.appendChild(taskForm());
    }
    else {
        console.log("Incorrect usage of replaceForm()")
    }
}