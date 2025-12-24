const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("partials/header.html")
    .then((r) => r.text())
    .then((html) => (document.getElementById("header").innerHTML = html));
});

const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
faders.forEach((fader) => observer.observe(fader));



//   FAQ Section 
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.querySelector(".faq-content");
    const isOpen = item.classList.contains("open");

    // 收起其他打開的項目（可選）
    document.querySelectorAll(".faq-item.open").forEach((other) => {
      if (other !== item) {
        other.classList.remove("open");
        other.querySelector(".faq-content").style.maxHeight = "0";
      }
    });

    // 切換當前項目
    if (!isOpen) {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      item.classList.remove("open");
      content.style.maxHeight = "0";
    }
  });
});
