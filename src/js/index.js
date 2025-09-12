let tasks = [
    { id: 1, descripition: "Comprar pão", checked: false },
    { id: 2, descripition: "Estudar JavaScript", checked: true },
    { id: 3, descripition: "Fazer exercícios", checked: false }
];

const getCheckBoxInput = ({id, descripition}) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = tasks.checked;

    label.textContent = descripition;
    label.htmlFor = checkboxId;
    
    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

window.onload = function() {
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
