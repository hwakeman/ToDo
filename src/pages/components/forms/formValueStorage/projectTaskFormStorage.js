import Project from "../../../../models/project";
import Task from "../../../../models/task";

export default function projectTaskFormStorage(projectName) {
    let newTask = new Task(
        document.getElementById('task-title').value,
        document.getElementById('task-description').value,
        document.getElementById('task-duedate').value,
        document.querySelector('input[name=priorities]:checked').id
    );

    let stringProject = localStorage.getItem('project-'+projectName);
    let taskList = stringProject.split('***');
    let project = new Project(projectName);
    for(let i = 0; i < taskList.length - 1 ; i++) {
        console.log(taskList[i]);
        let task = JSON.parse(taskList[i]);
        project.addTask(task);
    }
    project.addTask(newTask);

    localStorage.setItem("project-"+projectName, project.toString());
}