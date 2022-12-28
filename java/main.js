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
     const randomImg = Math.floor(Math.random() * poolImg.length)
     document.body.style.backgroundImage = "url('"+poolImg[randomImg]+"')"
  };

  bgRandImg();

// Change the background every 5 seconds
setInterval(bgRandImg, 3000);