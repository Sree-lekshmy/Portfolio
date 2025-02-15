window.onload = function () {

// Background Image Change Function
const images = [
    "./resources/backgrnd-1.jpg",
    "./resources/backgrnd-2.jpg",
    "./resources/backgrnd-4.jpg",
    "./resources/backgrnd-5.jpg",
];

let index = 0;
const navbar = document.getElementById("navbar");

function changeBackground() {
    footer.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

// Initial background
changeBackground();
setInterval(changeBackground, 3000);
};
document.addEventListener("mousemove", function(event) {
    let intro = document.querySelector("#intro-content");
    let x = (window.innerWidth / 2 - event.pageX) / 30; 
    let y = (window.innerHeight / 2 - event.pageY) / 30;

    intro.style.transform = `translate(${x}px, ${y}px)`;
});

let currentIndex = 0;
const slides = document.querySelectorAll(".gallery-slide");
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].style.display = "none"; // Hide current slide
    currentIndex = (currentIndex + 1) % totalSlides; // Move to next slide
    slides[currentIndex].style.display = "block"; // Show next slide
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds


