const taskInput = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

function createTask() {
    if (taskInput.value.trim().length == 0) {
        return false;
    }
    let template = `
    <div class="task">
		<div class="task__title">${taskInput.value}</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
    `;

    taskInput.value = '';
    taskList.insertAdjacentHTML('afterbegin', template);
    
    const taskRemove = taskList.getElementsByClassName('task')[0];
    taskRemove.onclick = () => {
        taskRemove.remove();
        return false;
    }

    return false;
}
taskAdd.onclick = createTask;
taskAdd.onkeyup = (key) => {
    if (key == 'Enter') {
        createTask();
    }
}
