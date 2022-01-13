var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var ranDicImg = "dice" + randomNumber1 + ".png";
var withSOurce = "images/" + ranDicImg;
var img1 = document.querySelectorAll("img")[0].setAttribute("src", withSOurce);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var ranDicImg2 = "dice" + randomNumber2 + ".png";
var withSOurce2 = "images/" + ranDicImg2;
var img2 = document.querySelectorAll("img")[1].setAttribute("src", withSOurce2);

// if (randomNumber1 === 1) {
//   document
//     .getElementsByTagName("img")[0]
//     .setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2) {
//   document
//     .getElementsByTagName("img")[0]
//     .setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 === 3) {
//   document
//     .getElementsByTagName("img")[0]
//     .setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 === 4) {
//   document
//     .getElementsByTagName("img")[0]
//     .setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 === 5) {
//   document
//     .getElementsByTagName("img")[0]
//     .setAttribute("src", "images/dice5.png");
// } else {
//   document
//     .getElementsByTagName("img")[0]
//     .setAttribute("src", "images/dice6.png");
// }

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber2);

// if (randomNumber2 === 1) {
//   document
//     .getElementsByTagName("img")[1]
//     .setAttribute("src", "images/dice1.png");
// } else if (randomNumber2 === 2) {
//   document
//     .getElementsByTagName("img")[1]
//     .setAttribute("src", "images/dice2.png");
// } else if (randomNumber2 === 3) {
//   document
//     .getElementsByTagName("img")[1]
//     .setAttribute("src", "images/dice3.png");
// } else if (randomNumber2 === 4) {
//   document
//     .getElementsByTagName("img")[1]
//     .setAttribute("src", "images/dice4.png");
// } else if (randomNumber2 === 5) {
//   document
//     .getElementsByTagName("img")[1]
//     .setAttribute("src", "images/dice5.png");
// } else {
//   document
//     .getElementsByTagName("img")[1]
//     .setAttribute("src", "images/dice6.png");
// }

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win 🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win 🚩";
} else if (randomNumber2 === randomNumber1) {
  document.querySelector("h1").innerHTML = "Draw";
}
