const comment_input = document.getElementById('comment_input');
let commentBtnList = document.getElementById('commentBtnList');
let applyBtn = document.getElementById('apply');
let cancelBtn = document.getElementById('cancel');

//코멘트란 포커싱 시에 버튼 표시
comment_input.addEventListener('click', function() {
    commentBtnList.setAttribute('style', 'display: inline;');
})

//코멘트란이 공란일 경우 포커싱이 사라지면 버튼 비표시
comment_input.addEventListener('blur', function(e) {
    if (e.target.value !== '') {
    } else {
      commentBtnList.setAttribute('style', 'display: none;');
    }
});

//코멘트란이 공란이 아닌 경우 포커싱이 사라져도 버튼 표시+색깔 변경.
comment_input.addEventListener('input', function(e) {
    if (e.target.value !== '') {
        commentBtnList.setAttribute('style', 'display: inline;');
        applyBtn.setAttribute('style', 'background-color: skyblue; color: white;');
    } else {
        applyBtn.setAttribute('style', 'background-color: revert; color: #aaaaaa;');
    }
});

//취소 버튼 누르면 버튼 비표시+Input 값 초기화
cancelBtn.addEventListener('click', function() {
    commentBtnList.setAttribute('style', 'display: none;');
    comment_input.value = '';
});

// 비디오 플레이어 클래스
// class VideoPlayer {
//   constructor() {
//     this.video = document.getElementById("video");
//     this.playBtn = document.getElementById("playBtn");

//     this.isPlaying = false;

//     this.init();
//   }

//   init() {
//     this.setupEventListeners();
//     this.setupVideoEvents();
//   }

//   setupEventListeners() {
//     this.playBtn.addEventListener("click", () => this.togglePlay());
//     this.video.addEventListener("click", () => this.togglePlay());
//   }

//   setupVideoEvents() {
//     this.video.addEventListener("play", () => {
//       this.isPlaying = true;
//       this.updatePlayButton();
//     });

//     this.video.addEventListener("pause", () => {
//       this.isPlaying = false;
//       this.updatePlayButton();
//     });

//     this.video.addEventListener("ended", () => {
//       this.isPlaying = false;
//       this.updatePlayButton();
//     });
//   }

//   togglePlay() {
//     if (this.isPlaying) {
//       this.video.pause();
//     } else {
//       this.video.play();
//     }
//   }

//   updatePlayButton() {
//     const icon = this.playBtn.querySelector("i");
//     if (this.isPlaying) {
//       icon.className = "fa fa-pause";
//     } else {
//       icon.className = "fa fa-play";
//     }
//   }
// }

// 페이지 로드 시 비디오 플레이어 초기화
// document.addEventListener("DOMContentLoaded", () => {
//   new VideoPlayer();
// });

