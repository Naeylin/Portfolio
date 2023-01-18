// Random background changer

const poolImg = [
  './assets/img/image1.png',
  './assets/img/image2.png',
  './assets/img/image3.png',
  './assets/img/image4.png',
  './assets/img/image5.png',
  './assets/img/image6.png',
  './assets/img/image7.png',
];

function bgRandImg() {
  // Calcul random pick
  const randomImg = Math.floor(Math.random() * poolImg.length)

  // Changement du background
  document.body.style.backgroundImage = "url('"+poolImg[randomImg]+"')"
};

bgRandImg();

// Change the background every 3 seconds
setInterval(bgRandImg, 3000);

