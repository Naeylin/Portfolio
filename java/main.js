//Parametrage navbar//

let currentElem = null;

flex_cont1.onmouseover = function(event) {
    if (currentElem) return;
    let target = event.target.closest('nav');
    if (!target) return;
    if (!flex_cont1.contains(target)) return;
    currentElem = target;
    onEnter(currentElem)
};

flex_cont1.onmouseout = function(event) {
    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    while (relatedTarget) {
        if (relatedTarget == currentElem) return;
        relatedTarget = relatedTarget.parentNode;
    }
    onLeave(currentElem);
    currentElem = null;
}
function onEnter() {
    document.getElementById("flex_cont1").style.opacity = "100%";
}
function onLeave() {
    document.getElementById("flex_cont1").style.opacity = "0%";
}

// parametrage slideshow//

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

// parametrage changement du background quand click sur un anchor navbar //

const poolImg =[
    './assets/img/image1.png',
    './assets/img/image2.png',
    './assets/img/image3.png',
    './assets/img/image4.png',
    './assets/img/image5.png',
    './assets/img/image6.png',
    './assets/img/image7.png'
]

var randomImg = Math.floor(Math.random() * poolImg.length);

function bgRandImg() {
    document.body.style.backgroundImage = "url('"+poolImg[randomImg]+"')"
    randomImg = Math.floor(Math.random() * poolImg.length)
};

bgRandImg()

document.getElementById("lien0").addEventListener('click', bgRandImg);
document.getElementById("lien1").addEventListener('click', bgRandImg);
document.getElementById("lien3").addEventListener('click', bgRandImg);
document.getElementById("lien4").addEventListener('click', bgRandImg);