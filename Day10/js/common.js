const inputTitle = document.getElementById('title'); // 책 제목 input 태그
const inputWriter = document.getElementById('writer'); // 작가명 input 태그
const inputGenre = document.getElementById('genre'); // 장르 input 태그
const inputRecommend = document.getElementById('isRecommend'); // 추천 여부 select 태그
const bookList = document.getElementById('bookList'); // 책 리스트 들어갈 div 태그
const bookCount = document.getElementById('bookCount'); // 책 갯수 들어갈 span 태그
const addBtn = document.getElementById('addBtn'); // 추가하기 버튼 button 태그

const books = []; // 책들을 저장할 배열

function renderBooks() { // 화면 다시 그리기
    bookList.innerHTML = '';

    if (books.length === 0) {
        bookList.innerHTML = '<p class="empty-text">아직 등록된 책이 없습니다.</p>'
        bookCount.textContent = 0;
        return;
    }

    books.forEach(function (book, index) {
        const card = document.createElement('div');
        card.classList.add('card');

        const recommendClass = book.isRecommend === '추천' ? 'good' : 'bad'

        card.innerHTML = `
        <h2>${book.title}</h2>
        <p><span>저자</span> : ${book.writer}</p>
        <p><span>장르</span> : ${book.genre}</p>
        <div class="recommend ${recommendClass}">${book.isRecommend}</div>
        <button class="delete-btn" data-index="${index}">삭제하기</button>
        `;

        bookList.appendChild(card);

        const deleteBtn = card.querySelector('.delete-btn');

        deleteBtn.addEventListener('click', function () {
            books.splice(index, 1);
            saveBooks();
            renderBooks();
        });
    });

    bookCount.textContent = books.length;
};

function saveBooks() { // 책 리스트 localStorage에 저장
    localStorage.setItem('bookList', JSON.stringify(books));
};

function loadBooks() { // localStorage에 저장된 책 리스트 불러오기
    const savedData = localStorage.getItem('bookList');

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        books.push(...parsedData);
    }

    renderBooks();
};


addBtn.addEventListener('click', function () {
    const titleValue = inputTitle.value.trim();
    const writerValue = inputWriter.value.trim();
    const genreValue = inputGenre.value.trim();
    const recommendValue = inputRecommend.value;


    if (titleValue === '') {
        alert('제목을 입력해주세요.');
        return;
    } else if (writerValue === '') {
        alert('저자를 입력해주세요.');
        return;
    } else if (genreValue === '') {
        alert('장르를 입력해주세요.');
        return;
    } else if (recommendValue === '') {
        alert('추천 여부를 선택해주세요.');
        return;
    }

    const newBook = {
        title: titleValue,
        writer: writerValue,
        genre: genreValue,
        isRecommend: recommendValue
    };

    books.push(newBook);
    saveBooks();
    renderBooks();

    inputTitle.value = '';
    inputWriter.value = '';
    inputGenre.value = '';
    inputRecommend.value = '';
});

loadBooks();