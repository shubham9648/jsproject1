console.log("hey this is ankit");
const colors = ["red","green","grey","cyan","purple","orange","blue","brown","black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//console.log(colors[2]);
//console.log(color);
btn.addEventListener("click",function(){
const randomNumber = getRandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});
function getRandomNumber(){
return Math.floor(Math.random()*colors.length);
}