let todoList = [];

function enterKeyFunction(event){

    if(event.key === 'Enter'){
        addTodos();
    }

}

function addTodos(){
   
let inputElem = document.querySelector('.js-inputTab');

    let name = inputElem.value;

    if( name !== ''){
        todoList.push(name); 
    }                 
    
    let todoOutputs = '';

    for (let i = 0; i < todoList.length; i++) {
       
       let results  = `<p  class="py-3 text-2xl text-center font-medium text-gray-500"> ${todoList[i]} <button class=" js-delete-btn h-9 w-9 text-blue-500"> ✘ </button>  </p>` 
       todoOutputs+= results;
    }

    document.querySelector('.js-output-todo').innerHTML = todoOutputs;
   

console.log(todoList);
inputElem.value = '';
}
