const inputTitle = document.getElementById('title'); // title 인풋 태그 > 영화제목
const inputGenre = document.getElementById('genre'); // genre 인풋 태그 > 장르
const inputTime = document.getElementById('time'); // time 인풋 태그 > 상영시간
const selectView = document.getElementById('isStudentView'); //  isStudentView 셀렉트 태그 > 청소년 관람 가능 여부
const addBtn = document.getElementById('addBtn') // addBtn 버튼 태그 > 추가하기
const moviePanel = document.getElementById('movie-panel') // movie-panel div 태그 > 영화 리스트 보여질 곳

// 영화 리스트 배열
const movieList = [
    {
        title: "7번방의 선물",
        genre: "다큐멘터리",
        time: "26.03.18 12:00",
        isStudentView: "가능",
    },
    {
        title: "존 윅 4",
        genre: "액션",
        time: "26.01.08 17:00",
        isStudentView: "불가능",
    },
    {
        title: "만약에 우리",
        genre: "멜로",
        time: "26.03.11 21:00",
        isStudentView: "가능",
    },
];


// 영화 배열에 추가하기
function addMovie(newMovie) {
    movieList.push(newMovie); // 영롸 리스트 배열 마지막에 새로운 영화 객체 추가

    // 입력값 초기화
    inputTitle.value = '';
    inputGenre.value = '';
    inputTime.value = '';
    selectView.value = '';

    renderList();
};

// 사용자가 입력한 값 받아와서 저장하기
function listServe() {
    const titleInfo = inputTitle.value.trim(); // titleInfo에 사용자가 입력한 제목 내용을 앞, 뒤 띄어쓰기 제외하고 저장
    const genreInfo = inputGenre.value.trim(); // genreInfo에 사용자가 입력한 제목 내용을 앞, 뒤 띄어쓰기 제외하고 저장
    const timeInfo = inputTime.value.trim(); // timeInfo에 사용자가 입력한 제목 내용을 앞, 뒤 띄어쓰기 제외하고 저장
    const viewInfo = selectView.value; // viewInfo에 사용자가 입력한 제목 내용을 앞, 뒤 띄어쓰기 제외하고 저장

    if (titleInfo === '') { // 입력 안했으면
        alert('제목을 입력해주세요.');
        return;
    } else if (genreInfo === '') { // 입력 안했으면
        alert('장르를 입력해주세요.');
        return;
    } else if (timeInfo === '') { // 입력 안했으면
        alert('상영시간을 입력해주세요.');
        return;
    } else if (viewInfo === '') { // 선택 안했으면
        alert('청소년 관람 가능 여부를 선택해주세요.'); // 경고창 띄우기
        return;
    }

    const movieItem = { // 영화 객체
        title: titleInfo, // 제목
        genre: genreInfo, // 장르
        time: timeInfo, // 상영시간
        isStudentView: viewInfo, // 청소년 관람 가능 여부
    }

    addMovie(movieItem); // 저장한 새로운 영화 정보 보내기
};

// 리스트 랜더링 함수
function renderList() {
    moviePanel.innerHTML = ''; // 영화 리스트 패널 초기화

    movieList.forEach(movie => {
        const itemBox = document.createElement('div'); // div 만들기
        itemBox.classList.add('item'); // > div.item > 아이템 자체
        const itemTitle = document.createElement('h3'); // h3 만들기
        itemTitle.classList.add('title'); // > h3.title > 장르
        const itemChip = document.createElement('span'); // span 만들기
        itemChip.classList.add('genre'); // > span.genre > 장르
        const itemInfo = document.createElement('ul'); // ul 만들기
        itemInfo.classList.add('info-box'); // > div.info-box > 상영시간, 청소년 관람 가능 여부 보여줄 박스
        const itemTime = document.createElement('li'); // li 만들기 > 상영시간 li
        const itemView = document.createElement('li'); // li 만들기 > 청소년 관람 가능 여부 li
        const timeTitle = document.createElement('p'); // p 만들기 > 상영시간 li 안에서 p가 타이틀 역할을 할 예정
        const viewTitle = document.createElement('p'); // p 만들기 > 청소년 관람 가능 여부 li 안에서 p가 타이틀 역할을 할 예정
        const timeContent = document.createElement('strong'); // strong 만들기 > 상영시간 li 안에서 strong이 값을 보여줄 예정
        const viewContent = document.createElement('strong'); // strong 만들기 > 청소년 관람 가능 여부 li 안에서 strong이 값을 보여줄 예정

        itemTitle.textContent = movie.title;// itemTitle 내용 저장
        itemChip.textContent = movie.genre;// itemChip 내용 저장

        // info-box 속 각 li안에 타이틀이 될 p 내용 저장
        viewTitle.textContent = '청소년 관람 가능 여부 |';
        timeTitle.textContent = '상영시간 |';

        console.log(movie.isStudentView)
        // info-box 속 각 li안에 값을 보여줄 strong 내용 저장
        timeContent.textContent = movie.time;
        viewContent.textContent = movie.isStudentView;

        itemTime.appendChild(timeTitle); // 상영시간 li에 상영시간 타이틀 삽입
        itemTime.appendChild(timeContent); // 상영시간 li에 상영시간 값 삽입
        itemView.appendChild(viewTitle); // 청소년 관람 가능 여부 li에 청소년 관람 가능 여부 타이틀 삽입
        itemView.appendChild(viewContent); // 청소년 관람 가능 여부 li에 청소년 관람 가능 여부 값 삽입

        itemInfo.appendChild(itemTime) // info-box에 상영시간 li 삽입
        itemInfo.appendChild(itemView) // info-box에 청소년 관람 가능 여부 li 삽입

        itemBox.appendChild(itemChip) // 영화 아이템 패널에 장르 chip 삽입
        itemBox.appendChild(itemTitle) // 영화 아이템 패널에 제목 타이틀 삽입
        itemBox.appendChild(itemInfo) // 영화 아이템 패널에 info-box삽입

        moviePanel.appendChild(itemBox); // 영화 리스트 패널에 itemBox 삽입
    });
};

addBtn.addEventListener('click', listServe);
renderList();