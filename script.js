// Open gallery when button is clicked
document.getElementById("startBtn").addEventListener("click", function () {
    document.querySelector(".gallery").scrollIntoView({
        behavior: "smooth"
    });
});

// Full screen image viewer
const images = document.querySelectorAll(".grid img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        if (img.requestFullscreen) {
            img.requestFullscreen();
        } else if (img.webkitRequestFullscreen) {
            img.webkitRequestFullscreen();
        }
    });
});

// Fade-in animation while scrolling
const sections = document.querySelectorAll(".gallery, .wish");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});
