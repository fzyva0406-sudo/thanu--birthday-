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
