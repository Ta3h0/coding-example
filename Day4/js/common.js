
function greetUser (userName, hobby) {
    console.log('제 이름은' + userName + '이고, 제 취미는' + hobby + '입니다.')
}

window.onload = () => {
    greetUser('태호', '코딩');
    greetUser('하진', '노래');
}