const cardArray= [
{
    name: "cheeseburger",
    img: "cheeseburger.png",
},

{
    name: "fries",
    img: "fries.png",
},

{
    name: "hotdog",
    img: "hotdog.png",
},

{
    name: "ice-cream",
    img: "ice-cream.png",
},

{
    name: "milkshake",
    img: "milkshake.png",
},

{
    name: "pizza",
    img: "pizza.png",
},

{
    name: "cheeseburger",
    img: "cheeseburger.png",
},

{
    name: "fries",
    img: "fries.png",
},

{
    name: "hotdog",
    img: "hotdog.png",
},

{
    name: "ice-cream",
    img: "ice-cream.png",
},

{
    name: "milkshake",
    img: "milkshake.png",
},

{
    name: "pizza",
    img: "pizza.png",
},

];
cardArray.sort(() => Math.random() -0,5); 
console.log(cardArray); 


const gridDisplay = document.getElementById("grid"); 
const resultDisplay = document.getElementById("result"); 
const cardsQty = cardArray.length;
const imgPath = "img/"
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
for (let i = 0; i < cardsQty; i++) {
const card = document.createElement("img");
card.setAttribute("src", imgPath + "blank.png");
card.setAttribute("data-id", i);
card.addEventListener("click", flipCard);
gridDisplay.appendChild(card);
    }

}

createBoard();

function flipCard(){
    const cardId = this.getAttribute("data-id");
    this.setAttribute("src", imgPath + cardArray[cardId].img);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    if(cardsChosen.length == 2){
    setTimeout(checkmatch, 500);

}
}

function checkmatch(){
    const cards = document.querySelectorAll("#grid img");

if(cardsChosen [0] == cardsChosen[1]){
    alert("Encontraste um Par");
    cards [cardsChosenIds[0]].setAttribute("src", imgPath +"white.png");
    cards [cardsChosenIds[1]].setAttribute("src", imgPath +"white.png");
    cards [cardsChosenIds[0]].removeEventListener("click",flipCard);
    cards [cardsChosenIds[1]].removeEventListener("click",flipCard);
    cardsWon.push(cardsChosen);
    
}else{
    alert("Tente outra vez");
    cards [cardsChosenIds[0]].setAttribute("src", imgPath +"blank.png");
    cards [cardsChosenIds[1]].setAttribute("src", imgPath +"blank.png");
}

cardsChosen = [];
cardsChosenIds = [];

if(cardsWon.length < cardArray.length /2){
resultDisplay.innerHTML = cardsWon.length;
}else{

resultDisplay.innerHTML = "Parabéns!";
}
}


