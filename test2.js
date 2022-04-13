
const poolImg =[
    './assets/img/image1.png',
    './assets/img/image2.png',
    './assets/img/image3.png'
]

let randomImg = Math.floor(Math.random() * poolImg.length);

function bgRandImg () {
    document.body.style.backgroundImage = "url('"+poolImg[randomImg]+"')"
    randomImg = Math.floor(Math.random() * poolImg.length)
};

bgRandImg()

const anchorElement = document.getElementById("recup")
    
anchorElement.addEventListener('click', bgRandImg);