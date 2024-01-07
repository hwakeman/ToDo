export default function deleteTask(taskName) {
    let taskFound = false;

    for(let task in localStorage) {
        if(task.startsWith('task') && task.substring(5) === taskName)  {
            localStorage.removeItem(task);
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
                    if(currTask.title === taskName) {
                        currTaskSring += '***';
                        console.log(project.charAt(project.indexOf(currTaskSring) + 1));
                        console.log(currTaskSring);
                        localStorage.setItem(task, project.replace(currTaskSring,''));
                    }
                });
                taskFound = true;
            }
        }
    }
}