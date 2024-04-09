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
const cardsQty = cardArray.length;
const imgPath = "img/"

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

}
