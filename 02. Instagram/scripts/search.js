document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("#btn-search");
  const panel = document.querySelector("#search-panel");
  const logo = document.querySelector(".brand");

  // 이미 열린 상태면 닫기
  if (panel.classList.contains("active")) {
    panel.classList.remove("active");
    logo.querySelector(".logo-full").setAttribute("style", "display: block");
    logo.querySelector(".logo-mini").setAttribute("style", "display: none;");
    document.querySelectorAll(".sidebar .item").forEach((el) => {
      el.querySelector(".txt").setAttribute("style", "display: block;")
    });
    document.querySelector(".sidebar").setAttribute("style", "auto");
    return;
  }

  if (openBtn && panel) {
    // 열기
    panel.classList.add("active");
    // 사이드바 '검색'만 활성
    document.querySelectorAll(".sidebar .item").forEach((el) => {
      el.classList.toggle("is-active", el.id === "btn-search");
      el.querySelector(".txt").setAttribute("style", "display: none;")
    });
    
    // 포커스
    setTimeout(() => document.getElementById("search-input")?.focus(), 0);
    logo.querySelector(".logo-full").setAttribute("style", "display: none");
    logo.querySelector(".logo-mini").setAttribute("style", "display: block !important;");
    document.querySelector(".sidebar").setAttribute("style", "width: 80px;");
  }

  // 내부 X 버튼
  if (e.target.closest("#btn-clear")) {
    const ipt = document.getElementById("search-input");
    if (ipt) {
      ipt.value = "";
      ipt.focus();
    }
  }

  // 다른 메뉴 클릭 시 닫기 (검색 버튼 제외)
  const menuItem = e.target.closest(".sidebar .item");
  if (menuItem && !menuItem.matches("#btn-search")) {
    logo.querySelector(".logo-full").setAttribute("style", "display: block");
    logo.querySelector(".logo-mini").setAttribute("style", "display: none;");
    
    panel?.classList.remove("active");
    // 페이지 키 기준으로 활성 복원
    const pageKey =
      document.documentElement.getAttribute("data-page") ||
      document.body.getAttribute("data-page");
    document.querySelectorAll(".sidebar .item").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.key === pageKey);
    });
  }
});

// ESC로 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document.getElementById("search-panel")?.classList.remove("active");
});
