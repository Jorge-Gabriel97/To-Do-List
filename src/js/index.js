let tasks = []

const getTasksFromLocalStorage = () => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'));
    return localTasks ? localTasks : [];
}

const setTasksInLocalStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}
const removeTask = (tasksId) => {
    const tasks = getTasksFromLocalStorage();
    const updatadeTasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(tasksId));
    setTasksInLocalStorage(updatadeTasks);

    document
        .getElementById('todo-list')
        .removeChild(document.getElementById(tasksId));

}

const removeDoneTasks = () => {
    const tasks = getTasksFromLocalStorage();
    const tasksToRemove = tasks
        .filter(({ checked }) => checked)
        .map(({ id }) => id);

    const updatadeTasks = tasks.filter(({ checked }) => !checked);
    setTasksInLocalStorage(updatadeTasks);

      tasks.filter(({ checked }) => !checked);

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
    const id = event.target.id.split('-')[0];
    const tasks = getTasksFromLocalStorage();

    const updatadeTasks = tasks.map((task) => {
        return (parseInt(id) === parseInt(task.id))
            ? { ...task, checked: event.target.checked }
            : task;
    })
    setTasksInLocalStorage(updatadeTasks);
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
    const tasksFromLocal = getTasksFromLocalStorage(); 
    const lastTask = tasksFromLocal[tasksFromLocal.length - 1];
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

    const tasks = getTasksFromLocalStorage();
    const updatadeTasks = [
        ...tasks,
        { id: newTaskData.id, descripition: newTaskData.descripition, checked: false }
    ]
    setTasksInLocalStorage(updatadeTasks);

    tasks.push({ id: newTaskData.id, descripition: newTaskData.descripition, checked: false });

    document.getElementById('descripition').value = '';

}

window.onload = function () {
    const form = this.document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    const localTasks = getTasksFromLocalStorage(); 
    localTasks.forEach((task) => { 
        const checkbox = getCheckBoxInput(task);
        createTaskListItem(task, checkbox);
    });
}
