import './components.css';

import taskDisplay from './taskDisplay';

export default function mainContentProject(projectName) {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    
    for(let key in localStorage) {
        if(key === "project-"+projectName) {
            let stringTasks = localStorage.getItem(key).split("***");
            stringTasks.pop();
            let tasks = stringTasks.map(element => JSON.parse(element));
            for(let task of tasks) {
                mainContent.appendChild(taskDisplay(task));
            }
            if(mainContent.childNodes.length === 0){
                let emptyContent = document.createElement('div');
                emptyContent.classList.add('main-content')
                emptyContent.classList.add('empty-content')
                emptyContent.innerHTML = `No tasks have been added to ${projectName}! Please add some using the plus button at the bottom of your screen.`;
                return emptyContent;
            }
        }
    }
    return mainContent;
}