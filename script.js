let pages = document.querySelectorAll(".page");
let current = 0;

// 🎵 Set soft volume when page loads
document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.3;
  }
});

function nextPage() {
  if (current < pages.length - 1) {
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
  }
}

function yes() {
  pages[current].classList.remove("active");
  document.getElementById("success").classList.add("active");
  confetti();
}

function no() {
  alert("Take your time... I’ll wait for you, Ms Smart 💚");
}
function startStory() {
  const music = document.getElementById("bg-music");
  music.volume = 0.3;
  music.play();
  nextPage();
}

function confetti() {
  for (let i = 0; i < 120; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.opacity = Math.random();
    heart.style.animation = `fall ${Math.random() * 2 + 3}s linear`;
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

// Falling animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
