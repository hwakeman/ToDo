import './components.css';

import taskDisplay from './taskDisplay';

export default function mainContentHome() {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    let taskExists = false;
    for(let key in localStorage) {
        let value = localStorage.getItem(key);
        let notTaskValues = ["", "***", null]
        if(key.startsWith("task-") || !notTaskValues.includes(value)) taskExists = true;
    }
    if(!taskExists) {
        mainContent.innerHTML = "No tasks added! Please add some using the plus button at the bottom of your screen."
        mainContent.classList.add('empty-content')
    }
    
    for(let key in localStorage) {
        if(key.startsWith('task')) {
            let task = JSON.parse(localStorage.getItem(key));
            task.title = key.substring(5);
            mainContent.appendChild(taskDisplay(task));
        }
        if(key.startsWith('project')) {
            let project = localStorage.getItem(key);
            let tasksStrings = project.split("***");
            tasksStrings.pop();
            let tasks = tasksStrings.map(element => JSON.parse(element));
            for(let task of tasks) {
                mainContent.appendChild(taskDisplay(task));
            }
        }
    }

    return mainContent;
}