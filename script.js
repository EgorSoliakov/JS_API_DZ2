const images = ["img/1.1.jpeg", "img/1.2.jpeg", "img/1.3.jpeg"]; // Пути к изображениям
let currentImageIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.querySelectorAll(".indicator");

const clickEvent = new Event("click");

function showImage(index) {
  document.querySelector(".slider-image").src = images[index];

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentImageIndex = index;
    showImage(currentImageIndex);
  });
});

showImage(currentImageIndex);
setInterval(nextBtn.dispatchEvent(clickEvent), 1500);
