let addMessage = document.querySelector(".message")
let addButton = document.querySelector(".add")
let todo = document.querySelector(".todo")
let todoList = [];
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
addButton.addEventListener("click", function() {
    if (!addMessage.value) return;
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
    };
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages() {
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
        <input type='checkbox' id='item_${i}'>
        <label for='item_${i}'class="${item.important? 'important': ''}>${item.todo} </label>
        </li>
        `
        todo.innerHTML = displayMessage;

    });
}