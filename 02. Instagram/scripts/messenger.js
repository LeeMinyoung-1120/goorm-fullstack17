const input = document.getElementById('msg-input');
const btn = document.getElementById('send-btn');
const container = document.getElementById('chat-container');
const rightIcons = document.querySelector('.input-right-icons');
const user_select = document.querySelector('.left-section-message-container');
const left = document.getElementById('left-section');
const right = document.getElementById('right-section');
const back = document.getElementById('back');
const search = document.getElementById('left-section-input');
const search_back = document.getElementById('left-section-search-back');
// 입력창 글자 변화 감지
input.addEventListener('input', () => {
  if (input.value.trim() !== "") {
    rightIcons.querySelectorAll('img').forEach(icon => icon.style.display = 'none');
    btn.style.display = 'flex';
  } else {
    rightIcons.querySelectorAll('img').forEach(icon => icon.style.display = 'inline');
    btn.style.display = 'none';
  }
});
search.addEventListener('click',()=>{
  search_back.style.display='flex';
})
search_back.addEventListener('click',()=>{
  search_back.style.display='none';
})
// 메시지 전송 함수
function sendMessage() {
  const text = input.value.trim();
  if (!text) return; // 빈 메시지면 종료

  const msgBox = document.createElement('div');
  msgBox.className = 'message';
  msgBox.textContent = text;

  container.appendChild(msgBox);
  input.value = '';
  container.scrollTop = container.scrollHeight;

  // 전송 후 버튼/아이콘 원복
  rightIcons.querySelectorAll('img').forEach(icon => icon.style.display = 'inline');
  btn.style.display = 'none';
}

// 클릭 이벤트
btn.addEventListener('click', sendMessage);

// Enter 키 이벤트
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});

// 모바일 화면에서 left/right 전환 함수
function showLeft() {
  left.style.display = 'flex';
  right.style.display = 'none';
}

function showRight() {
  left.style.display = 'none';
  right.style.display = 'flex';
  back.style.display='flex';
}

// 클릭 이벤트
user_select.onclick = () => {
  if (window.innerWidth <= 768) showRight();
};

back.onclick = () => {
  if (window.innerWidth <= 768) showLeft();
};

// 화면 크기 변경 시 상태 초기화
function handleResize() {
  if (window.innerWidth > 767) {
    // 데스크탑/태블릿: 둘 다 보이게
    left.style.display = 'flex';
    right.style.display = 'flex';
    back.style.display='none';
  } else {
    // 모바일: 왼쪽만 보여주기
    showLeft();
  }
}

window.addEventListener('resize', handleResize);

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tablist .tab-btn");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("is-active"));

      btn.classList.add("is-active");
    });
  });
});
