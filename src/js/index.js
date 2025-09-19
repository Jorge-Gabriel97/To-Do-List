let tasks = [
    { id: 1, descripition: "Comprar pão", checked: false },
    { id: 2, descripition: "Estudar JavaScript", checked: true },
    { id: 3, descripition: "Fazer exercícios", checked: false }
];

const removeTask = (tasksId) => {
    tasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(tasksId));

    document
        .getElementById('todo-list')
        .removeChild(document.getElementById(tasksId));

}

const removeDoneTasks = () => {
    const tasksToRemove = tasks
        .filter(({ checked }) => checked)
        .map(({ id }) => id);
        console.log(tasksToRemove);

        tasks = tasks.filter(({ checked }) => !checked);

        tasksToRemove.forEach((tasksToRemove) => {
            document
            .getElementById('todo-list')
            .removeChild(document.getElementById(tasksToRemove))
})
}

const createTaskListItem = (task, checkbox) => {

    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');

    const removeTaskButon = document.createElement('button');
    removeTaskButon.textContent = "X";
    removeTaskButon.ariaLabel = 'Remover tarefa';

    removeTaskButon.onclick = () => removeTask(task.id);

    toDo.id = task.id;

    toDo.appendChild(checkbox);
    toDo.appendChild(removeTaskButon);
    list.appendChild(toDo);
    return toDo;
}

const onCheckboxClick = (event) => {
    const [id] = event.target.id.split('-')[0];
    
    tasks = tasks.map((task) => {
        return (parseInt(id) === parseInt(task.id)) 
            ? { ...task, checked: event.target.checked }
            : task;       
})
}
console.log(tasks);


const getCheckBoxInput = ({ id, descripition, checked }) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;
    checkbox.addEventListener('change', onCheckboxClick);

    label.textContent = descripition;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const getNewTaskId = () => {
    const lastTask = tasks[tasks.length - 1];
    return lastTask ? lastTask.id + 1 : 1;
}

const getNewTaskData = (event) => {
    const descripition = event.target.elements.descripition.value;
    const id = getNewTaskId();
    return { descripition, id }
}

const createTask = (event) => {
    event.preventDefault();
    const newTaskData = getNewTaskData(event);    


    const checkbox = getCheckBoxInput(newTaskData)
    createTaskListItem(newTaskData, checkbox);

    tasks.push({ id: newTaskData.id, descripition: newTaskData.descripition, checked: false });

}

window.onload = function () {
    const form = this.document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    tasks.forEach((task) => {
       
        const checkbox = getCheckBoxInput(task);      
        createTaskListItem(task, checkbox);        
    });
}
