let todoList = [];
let completedTasks = {};

function enterKeyFunction(event){
    if(event.key === 'Enter'){
        addTodos();
    }
}

function addTodos(){
    let inputElem = document.querySelector('.js-inputTab');
    let name = inputElem.value;

    if (name !== '') {
        todoList.push(name);
    }

    let todoOutputs = '';

    for (let i = 0; i < todoList.length; i++) {
        let isCompleted = completedTasks[i] ? "line-through" : "";
        let results = `<li class="py-3 text-2xl text-center font-medium text-gray-500"> <span class="js-task${i}" onclick="editTodo(${i})" style="text-decoration: ${isCompleted};"> ${todoList[i]} </span> <button class="js-delete-btn h-9 w-9 text-blue-500" onclick="deleteTodo(${i})"> ✘ </button> </li>`;
        todoOutputs += results;
    }

    document.querySelector('.js-output-todo').innerHTML = todoOutputs;

    inputElem.value = '';
}

function editTodo(i){
    if (completedTasks[i]) {
        delete completedTasks[i];
    } else {
        completedTasks[i] = true;
    }
    addTodos();
}

function deleteTodo (i) {
    todoList.splice(i, 1);
    addTodos();
}

function clearCompleted() {
    for (let i in completedTasks) {
        delete completedTasks[i];
    }
    addTodos();
}

document.querySelector('.js-clear-btn').addEventListener('click', clearCompleted);
