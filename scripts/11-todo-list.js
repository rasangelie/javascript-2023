const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; 

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

}

const todoList2 = [];

function addTodoList() {
    const inputs = document.querySelector('.js-name-input2');
    const inputVal = inputs.value;

    todoList2.push(inputVal);

    renderTodoList();

    inputs.value = '';

}

function renderTodoList() {
    //add an accumulator
    let todoListHTML = '';

    for (let i=0; i < todoList2.length; i++) {
        const val = todoList2[i];
        const html = `<p> ${val} </p>`;
        todoListHTML += html;
        
        
    }
    // console.log(todoListHTML);
    //Show the user todo list to the webpage
    document.querySelector('.task-container')
        .innerHTML = todoListHTML;

    // console.log(todoList)
}