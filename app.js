//Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClick);
document.getElementById('clearAll').addEventListener('click', handleClearAll);


// Event Handler Functions
function handleSubmitForm(e) {
    e.preventDefault(); //prevents default submit behaviour
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
    }
    input.value = '';
};

function handleClick(e) {
    if (e.target.name == "checkButton") {
        checkTodo(e);
    }
    if (e.target.name == "deleteButton") {
        deleteTodo(e);
    }
    if (e.target.name == "editButton") {
        editTodo(e);
    }
    if (e.target.name == "completeEdit") {
        completeEdit(e);
    }
};

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}


// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class='todo-item'>${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="editButton"><i class="fas fa-pencil"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
};

function checkTodo(e) {
    let item = e.target.parentNode;
    let todoEdit = item.children[0];
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'none';
        todoEdit.style.opacity = '100%';
    }
    else {
        item.style.textDecoration = 'line-through';
        todoEdit.style.opacity = '50%';
    }
};

function deleteTodo(e) {
    let item = e.target.parentNode;

    item.addEventListener('transitionend', function () {
        item.remove();
    });

    item.classList.add('todo-list-item-fall');
};

function editTodo(e) {
    let item = e.target.parentNode;
    let todoEdit = item.children[0];
    let checkButton = item.children[1];
    let editButton = item.children[2];
    let deleteButton = item.children[3];


    let newEditBtn = document.createElement('button')
    item.appendChild(newEditBtn);
    newEditBtn.innerHTML = `
    <i class="fa-solid fa-check-double"></i>
    `;
    newEditBtn.name = 'completeEdit';

    todoEdit.contentEditable = true;
    editButton.setAttribute('disabled', 'disabled');
    checkButton.setAttribute('disabled', 'disabled');
    deleteButton.setAttribute('disabled', 'disabled');

    checkButton.style.opacity = '50%';
    deleteButton.style.opacity = '50%';
    editButton.style.opacity = '50%';
}

function completeEdit(e) {
    let item = e.target.parentNode;
    let todoEdit = item.children[0];
    let checkButton = item.children[1];
    let editButton = item.children[2];
    let deleteButton = item.children[3];
    let newEditBtn = item.children[4];

    todoEdit.contentEditable = false;
    newEditBtn.remove();

    deleteButton.removeAttribute('disabled', 'disabled');
    editButton.removeAttribute('disabled', 'disabled');
    checkButton.removeAttribute('disabled', 'disabled');

    checkButton.style.opacity = '100%';
    deleteButton.style.opacity = '100%';
    editButton.style.opacity = '100%';
}