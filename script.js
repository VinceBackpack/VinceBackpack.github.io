const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    })
})