let Boxes=document.querySelectorAll('.boxes .box');
let playbtn = document.querySelector("#color");
let easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
let colors=generateRandomColors(6);
let pickedColor = colors[Math.floor(Math.random() * 6)];
let boxCount=6;

let x=document.getElementsByClassName(".header");
x.style.background="black";

easyBtn.addEventListener('click',()=>{
  boxCount = 3;
 
  hardBtn.style.background = "white";
  hardBtn.style.color = "rgb(233, 119, 119)";
  colors=generateRandomColors(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  console.log(Boxes.length)
  for (let i = 0; i < Boxes.length; i++) {
      if (colors[i]) {
          Boxes[i].style.background = colors[i];
         
      } else {
          Boxes[i].style.display = "none";
      }
  }
});
hardBtn.addEventListener('click',()=>{
  boxCount=6;
  easy.style.background="white";
  easy.style.background="rgb(233, 119, 119)";
  colors=generateRandomColors(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 6)];
  console.log(Boxes.length)
  for (let i = 0; i < Boxes.length; i++) {
      if (colors[i]) {
          Boxes[i].style.background = colors[i];
         
      } else {
          Boxes[i].style.display = "none";
      }
  }
})
randomColor=()=>{
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
generateRandomColors=()=>{
let arr=[];
for(let i=0;i<6;i++){
  arr.push(randomColor());
}
return arr;
console.log(arr);
}