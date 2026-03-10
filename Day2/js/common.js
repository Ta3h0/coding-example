const todoInput = document.getElementById('todoInput'); // 인풋 태그
const addBtn = document.getElementById('addBtn'); // 추가 버튼
const todoList = document.getElementById('todoList'); // 할 일이 들어갈 곳
const todos = []; // 할 일 객체들을 모아두는 배열(장바구니)

function renderTodos() { //화면을 랜더링하는 함수
    todoList.innerHTML = ''; // 할 일 목록을 초기화
    todos.forEach(function (todo, index) { // todos 배열의 길이만큼 아래 내용을 반복한다. / todo = 배열 속 각각의 객체, index = 배열 속 각각의 객체들의 순서
        const li = document.createElement('li'); // 할 일을 담당할 li 태그 생성해서 변수명 li에 저장
        if (todo.done) { // 만약 todo.done 값이 true이면 = 완료된 상태 이면
            li.style.textDecoration = 'line-through'; // li에 text-decoration: line-through; 를 적용하라
            li.style.opacity = '0.6'; // li에 opacity: 0.6; 를 적용하라
            // 변수명(DOM 요소).style.속성 = '속성값'; > 변수명(DOM 요소)에 CSS를 적용하는 문법
        }

        const textSpan = document.createElement('span'); // 할 일에 내용이 들어갈 span 태그 생성해서 변수명 textSpan에 저장
        textSpan.textContent = todo.text; // textSpan에 텍스트로 todo.text 내용을 저장
        const doneBtn = document.createElement('button'); // 취소 / 완료 버튼을 담당할 button 태그를 생성해서 변수명 doneBtn에 저장
        doneBtn.textContent = todo.done ? '취소' : '완료'; //doneBtn에 텍스트로 취소, 완료중에 todo.done값이 true면 취소를 넣고 false면 완료를 넣음
        // 삼항 연산자: 조건 ? 참일때 값 : 거짓일 때 값
        doneBtn.addEventListener('click', function () { //doneBtn에 click 행동이 발생했을 때 함수를 실행
            todos[index].done = !todos[index].done // todos 배열 중 index(숫자)값에 해당하는 순서의 done 값을 반전(true면 false, false면 true)
            renderTodos(); // 변경된 값을 반영하여 다시 랜더링
        });

        const deleteBtn = document.createElement('button'); // 삭제 버튼을 담당할 button 태그를 생성해 변수명 deleteBtn에 저장
        deleteBtn.textContent = '삭제'; // deleteBtn에 텍스트로 삭제
        deleteBtn.addEventListener('click', function () {
            todos.splice(index, 1) // todos 배열중에 index에 해당하는 순서부터 1개의 요소만 삭제
            //배열.splice(num) = 배열 속 num번째 항목부터 배열을 재생성
            //배열.splice(num.del) = 배열 속 num번째 항복부터 배열을 재생성해서 del개 만큼의 요소를 삭제
            renderTodos(); // 변경된 값을 반영하여 다시 렌더링
        });

        const btnBox = document.createElement('btnBox'); // 버튼 박스 생성
        btnBox.appendChild(doneBtn) // btnBox 자식요소로 doneBtn을 추가
        btnBox.appendChild(deleteBtn) // btnBox 자식요소로 deleteBtn을 추가
        li.appendChild(textSpan); // li 자식요소로 textSapn을 추가
        li.appendChild(btnBox); // li 자식요소로 btnBox을 추가
        todoList.appendChild(li); // todoList 자식요소로 li를 추가
    });
};

addBtn.addEventListener('click', function () {
    const value = todoInput.value.trim(); // todoInput에 적힌 내용을 앞,뒤 띄어쓰기 제거 후 value에 저장

    if (value == '') { // value 값이 비었는지 확인
        alert('내용을 입력해주세요'); // 비었다면 경고창 표시
        return;
    }

    const newTodo = { // 객체 선언
        text: value, // value에 저장된 사용자가 입력한 내용을 text라는 속성으로 저장
        done: false // 기본값 false
    }

    todos.push(newTodo); // todos에 newTodo라는 객체를 저장
    todoInput.value = ''; // 사용자가 입력한 내용 초기화
    renderTodos(); // 변경된 값 다시 랜더링
});