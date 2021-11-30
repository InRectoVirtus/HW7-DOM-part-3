const taskTextInput = document.getElementById('taskText');
const list = document.getElementById('list');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', (e) => {
    if (!!taskTextInput.value) {
        addListItem(taskTextInput.value);
        taskTextInput.value = '';
    } else {
        alert('Enter task name');
    }
})

const addListItem = (value) => {
    let listItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete Task';
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove();
    });

    listItem.innerText = `${value}`;
    listItem.classList.add('list-item');
    listItem.classList.add('list-item__todo');
    listItem.append(deleteBtn);

    list.append(listItem);
}

list.addEventListener('click', (e) => {
    let target = e.target;
    if (target !== list) {
        toggleColor(target);
    }
})

const toggleColor = (elem) => elem.classList.toggle('list-item__todo');
