export default class Player {
  constructor() {
    this.score = 0;
    this.hand = [];
  }

  dealCard(card) {
    this.hand.push(card);
  }

  resetHand() {
    this.cards = [];
  }
}
