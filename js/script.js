let elForm = document.querySelector("form");
let elBtn = document.querySelector("button");
let elInput = document.querySelector("input");
let elNames = document.querySelector("#name");
let elTel = document.getElementById("number");
let elImg = document.getElementById("picture");
let elGoal = document.getElementById("goal");
let elVar = document.querySelector(".main");
let arr = [];


elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    elVar.textContent = ''

    const newItem = {
        name: elNames.value,
        tel: elTel.value,
        img: elImg.value,
        goal: elGoal.value,
    }

    arr.push(newItem)

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        const cards = document.createElement("div")
        cards.className = "cards"

        const cardsImg = document.createElement("img")
        cardsImg.src = element.img
        cardsImg.style.width = "270px"
        cards.appendChild(cardsImg)

        const cardsName = document.createElement("h3")
        cardsName.textContent = element.name
        cards.appendChild(cardsName);

        const cardsTel = document.createElement("h3")
        cardsTel.textContent = element.tel
        cards.appendChild(cardsTel)

        const cardsGoal = document.createElement("h3")
        cardsGoal.textContent = element.goal
        cards.appendChild(cardsGoal)
        
        elVar.appendChild(cards)
    }
    elNames.value = "";
    elTel.value = " ";
    elImg.value = " ";
    elGoal.value = " ";
     
}) 
