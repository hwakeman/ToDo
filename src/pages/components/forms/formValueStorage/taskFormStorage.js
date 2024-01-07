import Task from "../../../../models/task";

export default function taskFormStorage() {
    let task = new Task(
        document.getElementById('task-title').value,
        document.getElementById('task-description').value,
        document.getElementById('task-duedate').value,
        document.querySelector('input[name=priorities]:checked').id
    );

    let taskWithoutTitle = copyTaskWithoutTitle(task);

    localStorage.setItem("task-"+task.title, JSON.stringify(taskWithoutTitle));

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