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

$("#a").click(function() {
    $('.transform').toggleClass('transform-active');
  });