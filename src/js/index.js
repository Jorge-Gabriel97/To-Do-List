let tasks = [
    { id: 1, descripition: "Comprar pão", checked: false },
    { id: 2, descripition: "Estudar JavaScript", checked: true },
    { id: 3, descripition: "Fazer exercícios", checked: false }
];

const createTaskListItem = (task, checkbox) => {

    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');

    toDo.id = task.id;

    toDo.appendChild(checkbox);
    list.appendChild(toDo);
    return toDo;
}


const getCheckBoxInput = ({ id, descripition }) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = tasks.checked || false;

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
    const { id, descripition } = newTaskData;


    const checkbox = getCheckBoxInput(newTaskData)
    createTaskListItem(newTaskData, checkbox);

    tasks + [...tasks, { id: newTaskData.id, descripition: newTaskData.descripition, checked: false }];

}

window.onload = function () {
    const form = this.document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask)

    tasks.forEach((task) => {
        const checkbox = getCheckBoxInput(task);

        const list = document.getElementById('todo-list');
        const toDo = document.createElement('li');
        //const buttom = document.createElement('button');

        toDo.id = task.id;
        toDo.appendChild(checkbox);
        //toDo.appendChild(buttom);

        list.appendChild(toDo);
    })
}
