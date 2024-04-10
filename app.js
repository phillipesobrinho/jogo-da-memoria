const cardArray= [
{
    name: "cheeseburger",
    img: "cheeseburger-removebg-preview (1).png",
},

{
    name: "fries",
    img: "fries-removebg-preview.png",
},

{
    name: "hotdog",
    img: "hotdog-removebg-preview.png",
},

{
    name: "ice-cream",
    img: "ice-cream-removebg-preview.png",
},

{
    name: "milkshake",
    img: "milkshake-removebg-preview.png",
},

{
    name: "pizza",
    img: "pizza-removebg-preview.png",
},

{
    name: "cheeseburger",
    img: "cheeseburger-removebg-preview (1).png",
},

{
    name: "fries",
    img: "fries-removebg-preview.png",
},

{
    name: "hotdog",
    img: "hotdog-removebg-preview.png",
},

{
    name: "ice-cream",
    img: "ice-cream-removebg-preview.png",
},

{
    name: "milkshake",
    img: "milkshake-removebg-preview.png",
},

{
    name: "pizza",
    img: "pizza-removebg-preview.png",
},

];
cardArray.sort(() => Math.random() -0,5); 

const gridDisplay = document.getElementById("grid"); 
const resultDisplay = document.getElementById("result"); 
const cardsQty = cardArray.length;
const imgPath = "img/"
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let tentativa = 1;
let timeStart;

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
    if (timeStart == undefined) {
        timeStart = Date.now();
    }
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
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

if(cardsChosen [0] == cardsChosen[1]){
    alert("Encontraste um Par");
    cards[optionOneId].setAttribute("src", imgPath +"white--removebg-preview (1).png");
    cards[optionTwoId].setAttribute("src", imgPath +"white--removebg-preview (1).png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    
}else{
    alert("Tente outra vez");
    cards[optionOneId].setAttribute("src", imgPath + "blank.png");
    cards[optionTwoId].setAttribute("src", imgPath + "blank.png");
}

cardsChosen = [];
cardsChosenIds = [];

if(cardsWon.length < cardArray.length /2){
resultDisplay.innerHTML = cardsWon.length;
}else{

const timeTotal = math.floor((Date.now() - TimeStart) / 1000);
resultDisplay.innerHTML = "Parabéns!";
resultDisplay.innerHTML +=`À ${tentativa}ª tentativa.`;
resultDisplay.innerHTML +=`Demorante ${tentativa}ª segundo.`;

}

tentativa++; // INCREMENTAR TENTATIVA
}


