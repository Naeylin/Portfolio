// Light - Dark mode

const body = document.querySelector("body");
const toggleLM = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const text = document.getElementById('text');

let toggleLight;

toggleLM.addEventListener("change", (e) => {

    toggleLight = e.target.checked;

    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    text.style.color = text.style.color == "black" ? "white" : "black";
    text.style.borderColor = text.style.borderColor == "black" ? "white" : "black";
    
    localStorage.setItem('toggleLight', toggleLight)
});

window.addEventListener("load", () => {
    let toggleLightStored = JSON.parse(localStorage.getItem('toggleLight'));
    let toggleLM = document.getElementById('toggle');
    toggleLM.checked = toggleLightStored;
    if (toggleLightStored){
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
    console.log (toggleLightStored)
});
