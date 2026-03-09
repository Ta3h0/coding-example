const todoInput = document.getElementById('todoInput'); //인풋박스
const addBtn = document.getElementById('addBtn'); // 제출버튼
const todoList = document.getElementById('todoList'); //리스트 패널
const todos = []; // 빈 배열로 입력한 투두리스트 저장

function renderTodos() {
    todoList.innerHTML = ''; // 목록 영역을 비움. 다시 그릴 때 기존 DOM을 안 지우면 목록이 중복으로 쌓일 수 있음
    // 실제 할 일 리스트는 데이터로 todos 배열에 따로 저장되어 있으므로 화면은 비워도 데이터는 사라지지 않음

    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li'); // <li>를 만든걸 li라는 변수에 담음
        const createBtnEl = document.createElement('button'); // 완료여부 변경 버튼 생성
        const booleanTag = document.createElement('span'); // 완료/미완료 상태를 표시할 span 태그 생성

        if (todos[i].boolean === false) {
            booleanTag.textContent = '[미완료]';
        } else {
            booleanTag.textContent = '[완료]';
        }

        li.textContent = todos[i].value; // 여기서 li에 **할 일 객체의 value값(문자열)**이 들어감
        li.prepend(booleanTag); // 여기서 완료여부 글자가 맨 앞으로 들어감.

        createBtnEl.textContent = "완료여부 변경"; // 버튼 글씨 삽입
        createBtnEl.classList.add('changeBtn'); // 완료여부 버튼 class명 추가
        
        createBtnEl.addEventListener('click', function () {
            todos[i].boolean = !todos[i].boolean; // 클릭한 할 일에 해당하는 boolean 값만 반전
            renderTodos(); // 상태값이 반전되어 바뀌었으므로 화면을 다시 그려 변경된 값을 반영
        });

        li.appendChild(createBtnEl); // createBtnEl 변수에 담긴 <button>을 li의 자식요소로 넣어줘라.
        todoList.appendChild(li); // 현재 만든 li를 todoList에 자식 요소로 추가
    }; // 이 모든 걸 todos배열의 길이보다 작으면 순서를 1씩 추가하면서 반복하라
};

function addTodo() {
    const inputValue = todoInput.value.trim(); //todoInput으로 받은 value 값을 앞 뒤 공백없이 문자열로 넣어라

    if (inputValue === "") { // value값이 비어있으면 alert창 표시
        alert("내용을 넣어주세요")
        return;
    }
    
    const listValue = { boolean: false, value: inputValue }; // 객체 생성
    todos.push(listValue); // 객체 자체를 삽입

    todoInput.value = ''; // 인풋박스에 내용을 지움(초기화)
    renderTodos(); // 변경된 todos 배열을 기준으로 목록을 다시 그림
}

window.onload = () => { // 페이지 로딩이 끝난 뒤 아래 코드를 실행
    addBtn.addEventListener('click', addTodo); // 추가 버튼을 클릭하면 addTodo 함수 실행
}
