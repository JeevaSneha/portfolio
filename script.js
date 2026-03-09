// ==========================
// Typing Effect for Hero Text
// ==========================
const text = "Welcome to my Portfolio";
let index = 0;

function typeText() {
const typingElement = document.getElementById("typing");

if (index < text.length) {
typingElement.innerHTML += text.charAt(index);
index++;
setTimeout(typeText, 60);
} else {
typingElement.innerHTML += '<span class="cursor">|</span>';
}
}

typeText();

// ==========================
// Scroll Animations
// ==========================
const fadeElements = document.querySelectorAll(".fade");
const slideLeftElements = document.querySelectorAll(".slide-left");
const slideRightElements = document.querySelectorAll(".slide-right");
const projectCards = document.querySelectorAll(".project");

function showElements() {

const triggerPoint = window.innerHeight - 100;

// Fade animation
fadeElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerPoint) {
  element.classList.add("show");
}

});

// Slide from left
slideLeftElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerPoint) {
  element.classList.add("slide-in-left");
}

});

// Slide from right
slideRightElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerPoint) {
  element.classList.add("slide-in-right");
}

});

// Project cards animation (stagger effect)
projectCards.forEach((card, i) => {
const cardTop = card.getBoundingClientRect().top;

if (cardTop < triggerPoint) {
  setTimeout(() => {
    card.classList.add("show");
  }, i * 150);
}

});

}

// Run animation when scrolling
window.addEventListener("scroll", showElements);

// Run animation when page loads
window.addEventListener("load", showElements);
// Sakura falling animation

const sakuraContainer = document.querySelector(".sakura-container");

function createPetal(){
const petal = document.createElement("div");
petal.classList.add("petal");

petal.style.left = Math.random()*100 + "vw";
petal.style.animationDuration = (5 + Math.random()*5) + "s";

sakuraContainer.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);
}

setInterval(createPetal,300);
