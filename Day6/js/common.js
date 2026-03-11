const titleInput = document.getElementById('title'); // 책 제목 값 입력 input 태그
const genreInput = document.getElementById('genre'); // 장르 값 입력 input 태그
const writerInput = document.getElementById('writer'); // 저자 값 입력 input 태그
const RecommendTag = document.getElementById('isRecommend'); // 추천 여부 값 입력 select 태그
const addBtn = document.getElementById('addBtn'); // 추가 버튼
const bookPanel = document.getElementById('book-panel'); // 책 리스트 패널
let recommendValue; // 추천 여부 string > boolean 값으로 변환 용 변수

/* if (isRecommend.value === "") { // 추천 여부 비었을 경우
    alert("추천 여부를 입력해주세요.") // 경고창 띄우기
    return;
} */

// 책 리스트 배열
const bookList = [];

// 화면 다시 그리기
function renderList() {
    let bookHtml = ''; // 책 리스트 패널에 들어갈 카드 html 입력용 변수 선언

    for (let i = 0; bookList.length > i; i++) { // bookList 만큼 반복
        bookHtml += `<div class="item ${bookList[i].isRecommend}">
            <span class="genre">${bookList[i].genre}</span>
            <h1 class="title">${bookList[i].title}</h1>
            <ul class="info-box">
                <li>
                <p>저자</p>
                <strong>${bookList[i].writer}</strong>
                </li>
            </ul>
        </div>
        `
    }

    bookPanel.innerHTML = bookHtml; // 만든 bookHtml들을 책 리스트 패널에 삽입
}

function addList() {
    const newBook = {
        title: titleInput.value, // 제목
        genre: genreInput.value, // 장르
        writer: writerInput.value, // 저자
        isRecommend: RecommendTag.value, // 추천 여부
    }

    if (newBook.title === "") {
        alert('책 제목을 입력해주세요')
        return;
    } else if (newBook.writer === "") {
        alert('저자를 입력해주세요')
        return;
    } else if (newBook.genre === "") {
        alert('장르를 입력해주세요')
        return;

    } else if (newBook.isRecommend === "") {
        alert('추천 여부를 선택해주세요')
        return;
    }

    bookList.push(newBook);

    titleInput.value = '';
    genreInput.value = '';
    writerInput.value = '';
    RecommendTag.value = '';
    renderList();
}

addBtn.addEventListener('click', addList);