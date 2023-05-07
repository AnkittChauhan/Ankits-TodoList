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
            
            let results  = `<li class="py-3 text-2xl text-center font-medium text-gray-500"> <span class="js-task${i}" onclick="editTodo(${i})"> ${todoList[i]} </span> <button class=" js-delete-btn h-9 w-9 text-blue-500"> ✘ </button>  </li>` 
            todoOutputs+= results;
            }

            document.querySelector('.js-output-todo').innerHTML = todoOutputs;
        

        console.log(todoList);
        inputElem.value = '';
        }

        
        
        function editTodo(i){

           const editElement = document.getElementsByClassName(`js-task${i}`)[i];
          
           editElement.style.textDecoration = 'line-through';

        }


