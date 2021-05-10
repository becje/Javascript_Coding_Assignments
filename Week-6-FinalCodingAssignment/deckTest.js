var expect = chai.expect;

describe('Card class', () => {
    describe('#Card', () => {
        it('creates cards in a deck by assigning a suit, rank, and score to each card', () => {
            let suit = 'Hearts';
            let rank = 'Jack';
            let score = 11;
            let card = new Card(suit, rank, score);
            expect(suit).to.equal(suit, card.suit);
            expect(rank).to.equal(rank, card.rank);
            expect(score).to.equal(score, card.score);
        });
    });
});