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


    todoList2.forEach(function(valObject, index) {

        //destructuring
        const { name, dueDate } = valObject;
        const html = `
            <div> ${name} </div>
            <div> ${dueDate} </div>
                
            <button onclick="
            todoList2.splice(${index}, 1);
            renderTodoList();" class="delete-button">
                Delete
            </button> 
            `;
        todoListHTML += html;
    })

    // console.log(todoListHTML);
    //Show the user todo list to the webpage
    document.querySelector('.task-container')
        .innerHTML = todoListHTML;

    // console.log(todoList)
}