document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tablist .tab-btn");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("is-active"));

      btn.classList.add("is-active");
    });
  });
});
