class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Players {
    constructor(name) {
        this.name = name
        this.hand = []
        this.playedCards = []
    }
}
//creates the deck of cards
class Deck {
    constructor() {
            this.suit = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
            this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
            this.score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1]
            this.cards = []
            this.length = 52
            for (let i = 0; i < this.suit.length; i++) {
                for (let x = 0; x < this.rank.length; x++) {
                    let card = new Card(this.suit[i], this.rank[x], this.score[x])
                    this.cards.push(card)
                }
            }
        }
        //Algorithm for shuffling the cards
    shuffle = () => {
        for (let i = this.length - 1; i > 0; i--) {
            let newCard = Math.floor(Math.random() * (i + 1));
            let oldCard = this.cards[i];
            this.cards[i] = this.cards[newCard];
            this.cards[newCard] = oldCard;
        }
    }
}
//Sets the stage for playing the game and assigning who is player one and who is player two
class Game {
    constructor() {
        this.round = 0
        this.cardPile = []
        this.players = [new Players('Player One'), new Players('Player Two')]
        this.deck = new Deck()
        this.deck.shuffle();

        //Algorithm for dealing the cards
    }
    deal() {
            for (let i = 0; i < this.deck.length; i++) {
                if (i % 2 === 0) {
                    this.players[0].hand.unshift(this.deck.cards[i])
                } else {
                    this.players[1].hand.unshift(this.deck.cards[i])
                }
            }
            this.deck = []
            this.startPlay()
        }
        //Begins playing the game and plays 26 hands (half the deck)
    startPlay() {
            for (let i = 0; i < 26; i++) {
                this.round += 1;
                this.flipCards();
            }
        }
        //Algorithm for flipping each card and prints to the console the card each player flipped over.
    flipCards() {
        this.players[0].playedCards.unshift(this.players[0].hand[0]);
        this.players[0].hand.shift();
        this.players[1].playedCards.unshift(this.players[1].hand[0]);
        this.players[1].hand.shift();
        console.log(`\n${this.players[0].name} played a ${this.players[0].playedCards[0].rank} of ${this.players[0].playedCards[0].suit} \n\n${this.players[1].name} played a ${this.players[1].playedCards[0].rank} of ${this.players[1].playedCards[0].suit}`)
        this.checkScore();
    }

    //evaluates cards played and how many cards are in each players hand and then prints the total cards each player has in their hand to the console in addition to the current round of the game is in.
    winnerWinnerChickenDinner(a, b) {
        this.players[a].hand.push(...this.cardPile);
        this.players[a].hand.push(...this.players[a].playedCards, ...this.players[b].playedCards);
        this.players[a].playedCards = []
        this.players[b].playedCards = []
        this.cardPile = [];
        console.log(`\n${this.players[a].name} wins Round ${this.round}! \n\n ${this.players[a].name} has:  ${this.players[a].hand.length} Cards\n ${this.players[b].name} has:  ${this.players[b].hand.length} Cards\n----------------------------------------`)
    }

    //evaluates if the flipped card from player one is greater than player two and vice verca. If cards are equal sends to chckGame to determine if hand is a draw
    checkScore() {
        if (this.players[0].playedCards[0].score > this.players[1].playedCards[0].score) {
            this.winnerWinnerChickenDinner(0, 1);
        } else if (this.players[0].playedCards[0].score < this.players[1].playedCards[0].score) {
            this.winnerWinnerChickenDinner(1, 0);
        } else {
            console.log('Your lucky....it is a draw!\n----------------------------------------');
        }
    }
}

//Starts a new game
let game = new Game()
game.deal

//Resets the cards and prepars for a new game
newGame = () => {
        game.deck = new Deck();
        game.players[0].hand = [];
        game.players[1].hand = [];
        game.cardPile = [];
        game.players[0].playedCards = [];
        game.players[1].playedCards = [];
        game.round = 0;
        game.deck.shuffle();
        game.deal();
    }
    //provides feedback to end user on what to do if they want to play another game
console.log(`Click on 'New Game' to play again!`)
document.getElementById('button').addEventListener('click', newGame)