const rElement = document.getElementById ("r");
const gElement = document.getElementById ("g");
const bElement = document.getElementById ("b");

const levels = Array.from(document.getElementsByClassName("mode"));
const squares = Aarray.from(document.getElementsByClassName("square"));

let selectedLevelButton = levels.find((level) => {
  const classList = Array.from(level.classList);
  return classList.includes("selected");
});

let gameLevel = selectedLevelButton.innerHTML;

 levels.forEach((level) => { 
level.addEventListener("click", function () {
levels.forEach((mode) => mode.classList.remove("selected"));
this.classList.add("selected");

gameLevel = this.innerHTML;
});
 }); 

 // Attempt to make all the squares have background colour: rgb(200, 45, 255)
 const startButton = document.getElementById("reset");
 
 startButton.addEventListener("click", function () {
   for (let i = 0; i < squares.length; i = i + 1){
     const square = squares [i];
     square.style.backgroundColor = "rgb(200, 45, 255)";

     console.log("i = " + i);
     console.log(squares[i]);
   }
   

 });