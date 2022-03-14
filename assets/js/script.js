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
shuffle(orderRange);
console.log(orderRange);

// Add Order Css Property To Game Cards

cards.forEach((card, index) => {

    // Add CSS Order Property
    card.style.order = orderRange[index];
  
  });

 // Shuffle Function
function shuffle(array) {

    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Element
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
  
    }
  
    return array;
  
  }