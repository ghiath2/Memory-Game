document.querySelector(".control-button span").onclick = function () {

    let yourName = prompt("What's Your Name");

    if (yourName == null || yourName == "") {
        
        document.querySelector(".name span").innerHTML = 'Unknown';
    } else {

        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-button").remove();
};

let duration = 1000;

let cardsContainer = document.querySelector(".memory-game-cards");

let cards = Array.from(cardsContainer.children);

let orderRange = [...Array(cards.length).keys()];

console.log(orderRange);