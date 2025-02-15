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
/*document.addEventListener("mousemove", function(event) {
    let intro = document.querySelector("#intro-content");
    let x = (window.innerWidth / 2 - event.pageX) / 30; 
    let y = (window.innerHeight / 2 - event.pageY) / 30;

    intro.style.transform = `translate(${x}px, ${y}px)`;
});
*/

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".menu a"); // Select all menu links

    if (hamburger && menu) {
        console.log("Hamburger menu found in DOM");

        // Toggle menu when clicking the hamburger icon
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent click event from affecting other elements
            console.log("Hamburger menu clicked!");
            menu.classList.toggle("show");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (menu.classList.contains("show") && event.target !== hamburger) {
                menu.classList.remove("show");
                console.log("Menu closed");
            }
        });

        // Close menu when clicking a menu item (to allow navigation)
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                menu.classList.remove("show"); // Close menu on link click
                console.log(`Navigating to ${this.href}`);
            });
        });

        // Prevent menu clicks from closing it
        menu.addEventListener("click", function (event) {
            event.stopPropagation(); // Stops clicks inside the menu from closing it
        });
    } else {
        console.error("Hamburger menu or menu not found in DOM.");
    }
});

