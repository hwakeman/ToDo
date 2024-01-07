import Task from "../../../../models/task";

export default function editTaskFormStorage(previousTaskName) {
    let editedTask = new Task(
        document.getElementById('task-title').value,
        document.getElementById('task-description').value,
        document.getElementById('task-duedate').value,
        document.querySelector('input[name=priorities]:checked').id
    );

    let editedTaskWithoutTitle = copyTaskWithoutTitle(editedTask);

    //////////////

    let taskFound = false;

    for(let task in localStorage) {
        if(task.startsWith('task') && task.substring(5) === previousTaskName)  {
            localStorage.removeItem("task-"+previousTaskName);
            localStorage.setItem("task-"+editedTask.title, JSON.stringify(editedTaskWithoutTitle))
            taskFound = true;
        }
    }

    if(!taskFound) {
        for(let task in localStorage) {
            if(task.startsWith('project'))  {
                let project = localStorage.getItem(task)
                let tasks = project.split("***");
                tasks.pop();
                tasks.forEach((currTaskSring) => {
                    let currTask = JSON.parse(currTaskSring);
                    if(currTask.title === previousTaskName) {
                        currTaskSring += '***';
                        localStorage.removeItem(task);
                        localStorage.setItem(task, project.replace(currTaskSring,editedTask.toString()));
                    }
                });
                taskFound = true;
            }
        }
    }

    //////////////

    function copyTaskWithoutTitle(task) {
        let taskWithoutKey = {};
        for(let key in task) {
            if (key !== "title") {
                taskWithoutKey[key] = task[key];
            }
        }
        return taskWithoutKey;
    }
}