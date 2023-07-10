const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; 

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

}

const todoList2 = [{
    name: 'make dinner',
    dueDate: '2023-07-08'
    }];


document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodoList()
    });


function addTodoList() {
    const inputs = document.querySelector('.js-name-input2');
    const inputVal = inputs.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDateVal = dateInputElement.value;

    todoList2.push({
        name: inputVal,
        dueDate: dueDateVal
    });

    renderTodoList();

    inputs.value = '';

}

function renderTodoList() {
    //add an accumulator
    let todoListHTML = '';


    todoList2.forEach((valObject, index) => {

        //destructuring
        const { name, dueDate } = valObject;
        const html = `
            <div> ${name} </div>
            <div> ${dueDate} </div>
                
            <button class="delete-button js-delete-button">
                Delete
            </button> 
            `;
        todoListHTML += html;
    })

    // console.log(todoListHTML);

    //Show the user todo list to the webpage
    document.querySelector('.task-container')
        .innerHTML = todoListHTML;
    
    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList2.splice(index, 1);
                renderTodoList();
            });
        });

    // console.log(todoList)
}