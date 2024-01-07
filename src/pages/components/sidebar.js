import updateEventListeners from '../..';
import homePage from '../homePage';
import './components.css';

export default function sidebar() {
    let sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    let buttonLabels = ["Home", "Projects"];
    for(let i = 0 ; i < buttonLabels.length ; i++) {
        let button = document.createElement("button");
        button.innerHTML = buttonLabels[i];
        button.classList.add(`${buttonLabels[i].toLowerCase()}-btn`);
        button.classList.add("sidebar-btn");
        if(button.innerHTML === "Projects") button.id = 'main-project-button';
        sidebar.appendChild(button);
    };

    let projectNames = document.createElement('div');
    projectNames.classList.add('project-btns-container');
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.startsWith('project')) {
            let projectButtonsContainer = document.createElement('div');
            projectButtonsContainer.classList.add('single-project-btns-container')
            let projectLink = document.createElement('button');
            projectLink.classList.add('sidebar-btn');
            projectLink.classList.add('sidebar-project-btn');
            projectLink.innerHTML = '// '+key.substring(8);
            projectButtonsContainer.appendChild(projectLink);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('project-delete-btn')
            deleteButton.innerHTML = '-'
            deleteButton.addEventListener('click', function() {
                localStorage.removeItem(key)
                document.body.innerHTML = '';
                document.body.appendChild(homePage());
                updateEventListeners();
            });
            projectButtonsContainer.appendChild(deleteButton);

            projectNames.appendChild(projectButtonsContainer);
        }
    }
    sidebar.appendChild(projectNames);

    let plusButton = document.createElement("button");
    plusButton.innerHTML = '+';
    plusButton.classList.add('plus-btn');
    sidebar.appendChild(plusButton);

    document.body.appendChild(sidebar);
    return sidebar;
}