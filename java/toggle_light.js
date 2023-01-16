// Light - Dark mode

const body = document.querySelector("body");
const toggleLM = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const text = document.getElementById('text');

let theme = localStorage.getItem('theme') || 'light';

toggleLM.addEventListener("change", () => {

    if(theme === 'light') {
        theme = 'dark';
    } else {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);

    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

    if(text.style.color === "black")
        {text.style.color = "white";
        text.style.borderColor = "white";}
    else
        {text.style.color = "black";
        text.style.borderColor = "black";}

});

window.addEventListener('load', () => {
    theme = localStorage.getItem('theme') || 'light';

    if(theme === 'dark') {
        body.classList.add("dark");
        sunIcon.className = 'bx bx-sun';
        moonIcon.className = 'bx bx-moon';
        text.style.color = "white";
        text.style.borderColor = "white";
    } else {
        body.classList.remove("dark");
        sunIcon.className = 'bx bxs-sun';
        moonIcon.className = 'bx bxs-moon';
        text.style.color = "black";
        text.style.borderColor = "black";
    }
});