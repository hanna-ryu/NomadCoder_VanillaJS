const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 기본 동작 정지
    const username = loginInput.value; //인풋으로 받은 유저네임을 저장
    loginForm.classList.add(HIDDEN_CLASSNAME); // hidden 클래스를 추가해서 폼을 사라지게함
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 인풋 값을 저장하기
    paintGreetings(username); // paintGreetings 함수 실행하기

}

function paintGreetings(username){ // 그리팅 h1에서 클래스이름을 없애서 인삿말을 띄움.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Bonjour ${username} :) !`; 
}


const savedUserName = localStorage.getItem(USERNAME_KEY); //로컬스토리지에 username 저장되어있는  키를 불러온다.

if(savedUserName === null){ // 만약 로컬스토리지에 아무것도 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로긴폼을 없앤다.(클래스리스트를 지우면서)
    loginForm.addEventListener("submit", onLoginSubmit); // 그리고 폼의 버튼을 눌러 인풋을 제출하면, onLoginSubmit을 실행한다. 

}else { // 로컬스토리지에 값이 있으면
    paintGreetings(savedUserName) // 인삿말 띄우는 함수 실행
}