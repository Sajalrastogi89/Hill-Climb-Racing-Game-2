let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
// canvas.0width = 5000;
canvas.width = window.innerWidth;
let c = canvas.getContext("2d");
let score=0;
let count = 0;
let scoreNew = document.getElementById("score");
// let fuelTanker2=0;
//canvas.style.display = "none";
/*TRACK*/
let pLine = document.getElementById("petrol-line");
let start = 250;
let A=[];
c.fillStyle = "#6495ED";

const trigno = (a, b, c) => {
  return a + b + (a - b) * Math.cos(Math.PI * c);
};
let layers = [];

function land(x) {
  x = x / 150;
  layers.push(Math.random() * 50);
  return trigno(layers[Math.floor(x)], layers[Math.ceil(x)], x - Math.floor(x));
}

// let position = 0;
/*CAR*/
let carDistance = 0;
let img = new Image();
// let d = document.getElementById("distance");
// let arrow = document.getElementById("arrow");

function dCaclulate() {
  distance.innerHTML = carDistance;
}
function dPosition() {
  let dPoint = 480;
  setInterval(() => {
    dPoint += 0.4;
    d.style.left = dPoint + "px";
    // arrow.style.left = dPoint + "px";
  }, 300);
}
let car = new Image();
let carKeys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
car.src = "/images/car2.jpg";
let cX =280;
let cY = -100;
let carMove = (dY) => {
  // console.log(dY);
  c.drawImage(car, cX, dY, 130, 150);
};
let d = document.getElementById("distance");
function dCaclulate() {
  
  var p = 500;
  count += cX;
  distance.innerHTML = Math.floor(count/1000);
}
let i5 = 0;
// window.addEventListener("keydown", (event) => {
//   if (event.key == "ArrowRight") {
//     cX += 10;
//   }
//   if (event.key == "ArrowLeft") {
//     cX -= 10;
//   }
//   if (event.key == "ArrowUp") {
//     cX += 10;
//     cY -= 2;
//   }
//   if (event.key == "ArrowDown") {
//     cY += 2;
//     cX += 5;
//   }
// });
let h1=1;
let s=0;
let coinDistance=canvas.width;
function coin(d){
  s=d;
  let coin = new Image();
coin.src = "/images/coin.png";
c.drawImage(coin, coinDistance,d - 120, 70, 50);
coinDistance=coinDistance-h1;
if(coinDistance<=380){
coinDistance=canvas.width;
score+=50;}
}

let coinDistance1=canvas.width/2;
function coin1(d){
  let coin = new Image();
coin.src = "/images/coin.png";
c.drawImage(coin, coinDistance1,d - 120, 70, 50);
coinDistance1=coinDistance1-h1;
if(coinDistance1<=380){
coinDistance1=canvas.width;
score+=50;
// coin1(A[canvas.width-20]);
}}
console.log(score);



let coinDistance2=canvas.width/4;
function coin2(d){
  let petrol9 = new Image();
petrol9.src = "/images/petrolTanker.png";
c.drawImage(petrol9, coinDistance2,d - 120, 70, 50);
coinDistance2=coinDistance2-h1;
if(coinDistance2<=380){
coinDistance2=canvas.width;
// coin2(A[canvas.width-20]);
// fuelTanker2++;
pLine.style.backgroundColor = "rgb(21, 139, 41)";
   start = 250;
}}


// let coinDistance3=canvas.width/8;
// function coin3(d){
//   let petrol3 = new Image();
// petrol3.src = "/images/petrolTanker.png";
// c.drawImage(petrol3, coinDistance3--,d - 120, 70, 50);
// if(coinDistance3==112){
// coinDistance3=canvas.width;
// // coin2(A[canvas.width-20]);
// }}



// let coinY = 100;
// let coin = new Image();
// coin.src = "/images/coin.png";
// function coins(distance, n) {
//   var coinDistance = distance;
//   for (var j = 0; j < n; j++) {
//     c.drawImage(coin, coinDistance, canvas.height - img.height - 40, 70, 50);
//     coinDistance += 50;
//   }
// }
// console.log(layers);
// let petrolArr = [400, 1900, 3400];
// let count4 = 0;
// let j = 0;
// let g=0;
// function petrol1() {
//   if (cX + 100 >= petrolArr[0]) {
//     petrolArr.splice(0, 1);
//     console.log(++count4);
//     pLine.style.backgroundColor = "rgb(21, 139, 41)";
//     start = 250;
//   }
 
//   let petrol2 = new Image();
//   petrol2.src = "/images/tank (2).png";
//   for (var k = 0; k < 3; k++) {
//     c.drawImage(petrol2, petrolArr[k], canvas.height - img.height - 40, 70, 50);
//   }
// }

let count2 = 0;
/*ANIMATE FUNCTION */
let position = 0;

let o=canvas.width/4+20;
function animate() {
  c.fillRect(0, 0, canvas.width, canvas.height);
 
  // coinsArr.forEach((element) => {
  //   coins(element.dist, element.num);
  // });
  // petrol1();
  dCaclulate();
  img.src = "/images/trackNew.jpeg";
  position += 1;
  let i;

  for (i = 0; i < canvas.width; i++){
    g= canvas.height - land(i+position) ;
    A.push(g);
    c.drawImage(img, i,g- 40);}
    if (carKeys.right.pressed) {
      position += 5;
      o += 5;
     
      carDistance++;
    } else if (carKeys.left.pressed) {
      position -= 5;
      o -= 5;
    
      carDistance--;
    }
    carMove(A[o]- 180);
    coin(A[canvas.width-1]);
    coin1(A[canvas.width/2-1]);
    coin2(A[canvas.width/4-1]);
    // coin3(A[canvas.width/8-1]);
   
    o++; 
  // for (let i = 0; i < coinsArr.length; i++) {
  //   if (cX + 100 >= coinsArr[i].dist) {
  //     console.log("coin collected");
  //     coinsArr[i].dist = coinsArr[i].dist + 50;
  //     coinsArr[i].num--;
  //     // console.log(coinsArr[i].num);
  //     if (coinsArr[i].num >= 0) {
  //       count2 = count2 + 50;
  //       console.log(count2);
  //       scoreNew.innerHTML = count2;
  //     }
  //   }
  // }
  let TotalScore = count2;
  scoreNew.innerHTML = score;
  requestAnimationFrame(animate);
}
window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    carKeys.right.pressed = true;
    h1=5;
  }
  if (event.key == "ArrowLeft") {
    carKeys.left.pressed = true;
    h1=-5;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key == "ArrowRight") {
    carKeys.right.pressed = false;
    h1=1;
  }
  if (event.key == "ArrowLeft") {
    carKeys.left.pressed = false;
    h1=1;
  }
});
// animate();
/*PETROL*/
let fuel1 = document.getElementById("fuel1");
let petrol = document.getElementById("petrol");
let PBar = setInterval(petrolWork, 500);
function petrolWork() {
  if (start < 150 && start > 80) {
    pLine.style.backgroundColor = "#FFFF00";
    pLine.style.transition = "0.1s linear";
  }
  if (start < 80) {
    pLine.style.backgroundColor = "#FF0000";
    pLine.style.transition = "0.2s ease";
  }
  start = start - 5;
  if (start < -2) {
    window.location.assign("/html/out.html");
  }
  pLine.style.width = start + "px";
  // console.log(start);
}
petrolWork();
/*start*/
let section = document.getElementById("section1");

let load = document.getElementById("click-me");
let fuelImage = document.getElementById("fuel-image");
let coinImage = document.getElementById("coin-image");
function startShow() {
  load.style.visibility = "hidden";
}
/*BAR*/
let bar = document.getElementById("line");
load.addEventListener("click", () => {
  const cDown = setInterval(carDown, 50);
  function carDown() {
    cY += 50;
    if (cY > canvas.height - 160 - img.height) clearInterval(cDown);
    setTimeout(startShow(), 2000);
  }
  section.style.visibility = "hidden";
  petrol.style.visibility = "visible";
  pLine.style.visibility = "visible";
  d.style.visibility = "visible";
  bar.style.visibility = "visible";
  scoreNew.style.visibility = "visible";
  fuel1.style.visibility = "visible";
  fuelImage.style.visibility = "visible";
  coinImage.style.visibility = "visible";
  // arrow.style.visibility = "visible";
  dPosition();
  animate();
});
// let distance = document.getElementById("lastD");
// let coin5= document.getElementById("coins");
// distance.innerHTML="DISTANCE:"+count;
// coin5.innerHTML="Coins:"+score;