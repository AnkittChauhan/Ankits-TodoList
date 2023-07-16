let todoList = [];
let completedTasks = {};
let taskId = 0; 


window.addEventListener('load', function() {
    let savedTodoList = localStorage.getItem('todoList');
    if (savedTodoList) {
        todoList = JSON.parse(savedTodoList);
        renderTodoList();
    }
});

function enterKeyFunction(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addTodos();
    }
}

function addTodos() {
    let inputElem = document.querySelector('.js-inputTab');
    let name = inputElem.value;

    if (name !== '') {
        let task = {
            id: taskId++, 
            name: name
        };
        todoList.push(task);
        saveTodoList(); 
    }

    renderTodoList();

    inputElem.value = '';
}

function renderTodoList() {
    let todoOutputs = '';

    for (let i = 0; i < todoList.length; i++) {
        let task = todoList[i];
        let isCompleted = completedTasks[task.id] ? "line-through" : "";
        let results = `<li class="py-3 text-2xl text-center font-medium text-gray-500">
                            <span class="js-task${task.id}" onclick="editTodo(${task.id})" style="text-decoration: ${isCompleted};">
                                ${task.name}
                            </span>
                            <button class="js-delete-btn h-9 w-9 text-blue-500" onclick="deleteTodo(${task.id})">
                                ✘
                            </button>
                       </li>`;
        todoOutputs += results;
    }

    document.querySelector('.js-output-todo').innerHTML = todoOutputs;
}

function editTodo(id) {
    if (completedTasks[id]) {
        delete completedTasks[id];
    } else {
        completedTasks[id] = true;
    }
    saveTodoList(); 
    renderTodoList();
}

function deleteTodo(id) {
    
    let index = todoList.findIndex(task => task.id === id);
    if (index !== -1) {
        todoList.splice(index, 1);
        saveTodoList(); 
        renderTodoList();
    }
}

function clearCompleted() {
    for (let id in completedTasks) {
        delete completedTasks[id];
    }
    saveTodoList(); 
    renderTodoList();
}

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-clear-btn').addEventListener('click', clearCompleted);


document.querySelector('.js-inputTab').addEventListener('keydown', enterKeyFunction);
