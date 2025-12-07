const inputs = document.querySelectorAll('input');
const userIdInput = document.getElementById('user-id');
const userPwInput = document.getElementById('user-pw');

function validate() {
    if (userIdInput.value == '' || userPwInput.value == '') {
        return false;
    } else {
        return true;
    }
}

//서버가 없는 목업 페이지이므로, 아이디 비밀번호만 입력되면 무조건 home.html 화면으로 접근
function saveLocalStorage() {
    if (validate()) {
        window.localStorage.setItem('status', 'login fin');
        window.location.href="./home.html";
    }
    else {
        alert("아이디와 비밀번호 모두 입력하세요.");
    }
}
