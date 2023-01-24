

var slideshow = document.getElementById("slideshow");
var images = slideshow.getElementsByTagName("img");
var current = 0;

slideshow.style.display = "flex"

for (var i = 1; i < images.length; i++) {
    images[i].style.display = "none";
}

images[current].style.display = "block";

function nextSlide() {
   images[current].style.display = "none";
   current = (current + 1) % images.length;
   images[current].style.display = "block";


}

setInterval(nextSlide, 3000);