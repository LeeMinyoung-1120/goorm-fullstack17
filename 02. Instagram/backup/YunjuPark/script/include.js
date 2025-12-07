// 파셜(components/*.html) 주입
async function loadPartials() {
  const nodes = document.querySelectorAll("[data-include]");
  for (const el of nodes) {
    const url = el.getAttribute("data-include");
    const res = await fetch(url);
    el.innerHTML = await res.text();
  }
  afterInclude();
}

function afterInclude() {
  // 현재 페이지 키에 맞춰 활성 아이콘 표시
  const pageKey =
    document.documentElement.getAttribute("data-page") ||
    document.body.getAttribute("data-page");
  document.querySelectorAll(".sidebar .item").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.key === pageKey);
  });
}

loadPartials();
