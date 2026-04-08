// Dark Mode Toggle
document.getElementById("darkModeToggle").onclick = function () {
  document.body.classList.toggle("dark");
};

// Simple Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "0.5s";
});
