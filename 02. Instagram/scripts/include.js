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
  const pageKey = document.documentElement.getAttribute("data-key") || document.body.getAttribute("data-key");
  document.querySelectorAll(".sidebar .item").forEach((el) => {
    if (window.location.href.includes(el.dataset.key)) {
      const span = el.querySelector("span.txt")
      span.style.setProperty('font-weight', '700', 'important');
    }
    el.classList.toggle("is-active", window.location.href.includes(el.dataset.key));
    // el.classList.toggle("is-active", el.dataset.key === pageKey);
  });

  window.addEventListener('load', function(){
	//실행될 코드
    if (window.location.href.includes("messenger")) {
      console.log(window.location.href);
      const sidebar = document.querySelector(".sidebar");
      console.log(sidebar);
    } else {
      console.log("test2");
    }
  });
}

loadPartials();
setTimeout(msgSidebar, 50);

function subDisplay() {
  const submenu = document.getElementById("submenu");
  if (submenu.style.display === "none") {
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
}

function logout() {
  window.localStorage.removeItem('status');
  window.location.href="./login.html";
}

function goPage(pageId) {
  window.location.href = "../pages/" + pageId + ".html";
}

function msgSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const logo = sidebar.querySelector(".brand");
  if (window.location.href.includes("messenger")) {
    logo.querySelector(".logo-full").setAttribute("style", "display: none");
    logo.querySelector(".logo-mini").setAttribute("style", "display: block !important;");
    sidebar.setAttribute("style", "width: 80px;");
    sidebar.querySelectorAll(".item").forEach((el) => {
      el.querySelector(".txt").setAttribute("style", "display: none;")
    });
  }
}