const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todos = [];

function countNumber() {
    const innerNum = document.getElementById('innerCount');
    const positionNum = document.getElementById('positionCount');

    innerNum.innerHTML = '';
    positionNum.innerHTML = '';

    const countNum = todos.filter(done => !done.done).length;
    const innerNumLi = document.createElement('li');
    const positionNumLi = document.createElement('li');

    innerNumLi.textContent = '남은 할일 갯수: ' + countNum + '개';
    positionNumLi.textContent = '남은 할일 갯수: ' + countNum + '개';

    innerNum.appendChild(innerNumLi);
    positionNum.appendChild(positionNumLi);
}

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(function (todo, index) {
        const li = document.createElement('li'); // li 태그 만들기
        const doneBtn = document.createElement('button'); // doneBtn 태그 만들기
        const deleteBtn = document.createElement('button'); // deleteBtn 태그 만들기
        const btnBox = document.createElement('div'); // deleteBtn 태그 만들기
        btnBox.classList.add('btnBox');

        li.textContent = todo.text;
        deleteBtn.textContent = '삭제';
        doneBtn.textContent = todo.done ? '취소' : '완료';

        doneBtn.addEventListener('click', function () {
            todos[index].done = !todos[index].done;
            renderTodos();
        });

        deleteBtn.addEventListener('click', function () {
            todos.splice(index, 1);
            renderTodos();
        });

        btnBox.appendChild(doneBtn);
        btnBox.appendChild(deleteBtn);
        li.appendChild(btnBox);
        todoList.appendChild(li);
    })
    countNumber();
}

addBtn.addEventListener('click', function () {
    const value = todoInput.value.trim();

    if (value === '') {
        alert('내용을 입력하시오.');
        return;
    }

    const newTodo = {
        text: value,
        done: false,
    }

    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
});

window.onload = () => {
    countNumber();
};