document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
});

const photos = document.querySelectorAll(".gallery img");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        photo.requestFullscreen?.();
    });
});
