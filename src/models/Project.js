export default class Project {
    constructor(title) {
      this.title = title;
      this.tasks = []
    }
    
    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(item => item.title !== taskName);
    }

    toString() {
        let returnString = ""
        for(let i = 0 ; i < this.tasks.length ; i++) {
            let task = this.tasks[i];
            returnString += `{"title":"${task.title}","description":"${task.description}","dueDate":"${task.dueDate}","priority":"${task.priority}"}***`;
        }
        return returnString;
    }
}