import homePage from "./pages/homePage";
import projectPage from "./pages/projectPage";
import newTaskForm from "./pages/components/forms/newTaskForm";
import newProjectTaskForm from "./pages/components/forms/newProjectTaskForm";

let projectButtonLastClicked = false;
let lastProjectClicked = "";

document.body.appendChild(homePage());
updateEventListeners();

function updateEventListeners() {
    let iconBtn = document.getElementsByClassName("header-icon")[0];
    let homeBtn = document.getElementsByClassName("home-btn")[0];
    let projectBtns = document.getElementsByClassName('sidebar-project-btn');
    let plusBtn = document.getElementsByClassName("plus-btn")[0];

    iconBtn.addEventListener("click", function() {
        document.body.innerHTML = '';
        document.body.appendChild(homePage());
        projectButtonLastClicked = false;
        updateEventListeners();
    });

    homeBtn.addEventListener("click", function() {
        document.body.innerHTML = '';
        document.body.appendChild(homePage());
        projectButtonLastClicked = false;
        updateEventListeners();
    });

    for(let btn of projectBtns) {
        btn.addEventListener("click", function() {
            projectButtonLastClicked = true;
            lastProjectClicked = btn.innerHTML.substring(3);
            document.body.innerHTML = '';
            document.body.appendChild(projectPage(lastProjectClicked));
            updateEventListeners();
        });
    }

    plusBtn.addEventListener("click", function() {
        if(!projectButtonLastClicked) {
            document.body.appendChild(newTaskForm());
        }
        else {
            document.body.appendChild(newProjectTaskForm(lastProjectClicked));
        }
        updateEventListeners();
    });
}

export default updateEventListeners

