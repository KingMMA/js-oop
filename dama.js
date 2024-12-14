function shuffle(arr) {
    let rand, temp;
    for (let i = 0; i < arr.length; i++) {
      rand = Math.floor(Math.random() * (i + 1));
      temp = arr[rand];
      arr[rand] = arr[i];
      arr[i] = temp;
    }
    return arr;
}

function zipWithValue(array, value) {
    return array.map(item => [item, value]);
}

function getCards(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let cards = shuffle(
        [
            ...zipWithValue(values, "♠"), 
            ...zipWithValue(values, "♣"),
            ...zipWithValue(values, "♥"),
            ...zipWithValue(values, "♦")
        ]
    )
    console.log(cards)
    return cards
}


function move(card, player_type){
    if (card[0] === "Q" && card[1] === "♠"){
        alert(`${player_type} переміг!`);
        alert(`Його карта: Ранг ${card[0]}, Масть ${card[1]}`)
        return true
    } else {
        alert(`${player_type} випала карта: Ранг ${card[0]}, Масть ${card[1]} `)
        return false
    }
}

function startGame() {
    let cards = getCards();
    while (cards.length > 0) {
        let playerCard;
        let playerChoice = prompt("Виберіть звідки взяти карту: 1 - початок, 2 - кінець, 3 - середина");
        if (playerChoice === "1") {
            playerCard = cards.shift();
        } else if (playerChoice === "2") {
            playerCard = cards.pop();
        } else if (playerChoice === "3") {
            playerCard = cards.splice(Math.floor(cards.length / 2), 1)[0];
        } else {
            alert("Неправильний вибір, спробуйте знову.");
            continue;
        }

        if (move(playerCard, "player")) {
            break;
        }

        let computerChoice = Math.floor(Math.random() * 3);
        let computerCard;
        if (computerChoice === 0) {
            computerCard = cards.shift();
        } else if (computerChoice === 1) {
            computerCard = cards.pop();
        } else {
            computerCard = cards.splice(Math.floor(cards.length / 2), 1)[0];
        }

        if (move(computerCard, "computer")) {
            break;
        }
    }
    alert("Гра завершена!");
}

startGame();