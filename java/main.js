// Glass sidebar

const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle_nvb');

toggle.addEventListener('click', () => {

    if(sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');
    })

})

// Light - Dark mode

const body = document.querySelector("body");
const toggleLM = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const test = document.getElementById('test');

toggleLM.addEventListener("change", () => {

    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    
    if(test.style.color === "black")
        {test.style.color = "white";
        test.style.borderColor = "white";}
    else
        {test.style.color = "black";
        test.style.borderColor = "black";}

});