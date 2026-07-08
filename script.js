// Welcome button
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    document.querySelector(".gallery").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Image click effect
document.querySelectorAll(".grid img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom");
  });
});

// Fade animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".gallery, .wish").forEach((el) => {
  observer.observe(el);
});
// Birthday Confetti
window.addEventListener("load", () => {
  const duration = 5000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 70,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 70,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
