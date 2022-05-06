//Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);

// Event Handler Functions
function handleSubmitForm(e) {
    e.preventDefault(); //prevents default submit behaviour
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
    }
    input.value = '';
}

// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class='todo-item'>${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>

    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}
