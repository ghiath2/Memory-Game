
  
  // Select The Start Game Buttun

  document.querySelector(".control-button span").onclick = function () {

    // Prompt Window To Ask For Name 

    let yourName = prompt("What's Your Name");

    // If Name Is Empty

    if (yourName == null || yourName == "") {

    // Set Name To Unknown  

        document.querySelector(".name span").innerHTML = 'Unknown';

    // Name Is Not Empty  

    } else {

    // Set Name To Your Name

        document.querySelector(".name span").innerHTML = yourName;
    }

    // Remove Splash Screen

    document.querySelector(".control-button").remove();
  };

  // Effect Duration

  let duration = 1000;

  // Select Cards Container

  let cardsContainer = document.querySelector(".memory-game-cards");

  // Creat Array From Game Cards 

  let cards = Array.from(cardsContainer.children);

  // Create Range Of Keys

  let orderRange = [...Array(cards.length).keys()];

  shuffle(orderRange);

// Add Order Css Property To Game Cards

cards.forEach((card, index) => {

    // Add CSS Order Property

    card.style.order = orderRange[index];

    // Add Click Event

  card.addEventListener('click', function () {

    // Trigger The Flip Card Function

    flipCard(card);

  });
  
  });

    // Flip Cards Function

  function flipCard(selectedCard) {
      
    // Add Class is-flipped

  selectedCard.classList.add('is-flipped');

    // Collect All Flipped Cards

   let allFlippedCards = cards.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

   // If Theres Two Selected Cards

   if (allFlippedCards.length === 2) {
       // Stop Clicking Function

    stopClicking();

     // Check Matched Block Function

     checkMatchedCards(allFlippedCards[0], allFlippedCards[1]);

  }
  }
  
  // Stop Clicking Function

function stopClicking() {

    // Add Class No Clicking on Cards Container

    cardsContainer.classList.add('no-clicking');
  
    // Wait Duration

    setTimeout(() => {
  
      // Remove Class No Clicking After The Duration

      cardsContainer.classList.remove('no-clicking');
  
    }, duration);
  
  } 

  // Check Matched Cards

function checkMatchedCards(firstCard, secondCard) {

    let triesElement = document.querySelector('.tries span');
  
    if (firstCard.dataset.cities === secondCard.dataset.cities) {
  
      firstCard.classList.remove('is-flipped');
      secondCard.classList.remove('is-flipped');
  
      firstCard.classList.add('has-match');
      secondCard.classList.add('has-match');
  
      document.getElementById('win').play();
  
    } else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
  
      setTimeout(() => {
  
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
  
      }, duration);
  
      document.getElementById('lose').play();
  
    }
  
  }

 
  

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