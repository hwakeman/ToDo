import Project from "../../../../models/project";

export default function projectFormStorage() {
    let project = new Project(
        document.getElementById('project-title').value
    );
    localStorage.setItem("project-"+project.title, "");
}