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

class Deck {
    constructor() {
        this.suit = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
        this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
        this.score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        this.cards = []
        this.length = 52
        for (let i = 0; i < this.suit.length; i++) {
            for (let x = 0; x < this.rank.length; x++) {
                let card = new Card(this.suit[i], this.rank[x], this.score[x])
                this.cards.push(card)
            }
        }
    }
    shuffle = () => {
        for (let i = this.length - 1; i > 0; i--) {
            let newCard = Math.floor(Math.random() * (i + 1));
            let oldCard = this.cards[i];
            this.cards[i] = this.cards[newCard];
            this.cards[newCard] = oldCard;
        }
    }
}

class Game {
    constructor() {
        this.round = 0
        this.cardPile = []
        this.players = [new Players('Player One'), new Players('Player Two')]
        this.deck = new Deck()
        this.deck.shuffle();
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
    startPlay() {
        this.round += 1;
        for (let i = 0; i < 26; i++) {
            this.flipCards();
        }
    }
    flipCards() {
        this.players[0].playedCards.unshift(this.players[0].hand[0]);
        this.players[0].hand.shift();
        this.players[1].playedCards.unshift(this.players[1].hand[0]);
        this.players[1].hand.shift();
        console.log(`\n${this.players[0].name} played a ${this.players[0].playedCards[0].rank} of ${this.players[0].playedCards[0].suit} \n\n ${this.players[1].name} played a ${this.players[1].playedCards[0].rank} of ${this.players[1].playedCards[0].suit}`)
        this.checkScore();
    }
    winnerWinnerChickenDinner(a, b) {
        this.players[a].hand.push(...this.cardPile);
        this.players[a].hand.push(...this.players[a].playedCards, ...this.players[b].playedCards);
        this.players[a].playedCards = []
        this.players[b].playedCards = []
        this.cardPile = [];
        console.log(`\n${this.players[a].name} wins Round ${this.round}! \n\n ${this.players[a].name}: ${this.players[a].hand.length} Cards \n ${this.players[b].name}: ${this.players[b].hand.length} Cards`)
    }
    checkScore() {
        if (this.players[0].playedCards[0].score > this.players[1].playedCards[0].score) {
            this.winnerWinnerChickenDinner(0, 1);
        } else if (this.players[0].playedCards[0].score < this.players[1].playedCards[0].score) {
            this.winnerWinnerChickenDinner(1, 0);
        } else {
            (this.players[0].playedCards[0].score = this.players[1].playedCards[0].score)
            console.log('It is a Draw')
        }
    }
    victoryMessage(player) {
        console.log(`Congratulations, ${player}!\n\n You have won the battle, but not the war!`)
    }
}

let game = new Game()
game.deal

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
console.log(`Click on 'New Game' to play again!`)
document.getElementById('button').addEventListener('click', newGame)