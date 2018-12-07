export default class Deck {
  constructor() {
    this.cards = [
      { name: 'AS', value: 11 },
      { name: '2S', value: 2 },
      { name: '3S', value: 3 },
      { name: '4S', value: 4 },
      { name: '5S', value: 5 },
      { name: '6S', value: 6 },
      { name: '7S', value: 7 },
      { name: '8S', value: 8 },
      { name: '9S', value: 9 },
      { name: '10S', value: 10 },
      { name: 'JS', value: 10 },
      { name: 'QS', value: 10 },
      { name: 'KS', value: 10 },
      { name: 'AH', value: 11 },
      { name: '2H', value: 2 },
      { name: '3H', value: 3 },
      { name: '4H', value: 4 },
      { name: '5H', value: 5 },
      { name: '6H', value: 6 },
      { name: '7H', value: 7 },
      { name: '8H', value: 8 },
      { name: '9H', value: 9 },
      { name: '10H', value: 10 },
      { name: 'JH', value: 10 },
      { name: 'QH', value: 10 },
      { name: 'KH', value: 10 },
      { name: 'AD', value: 11 },
      { name: '2D', value: 2 },
      { name: '3D', value: 3 },
      { name: '4D', value: 4 },
      { name: '5D', value: 5 },
      { name: '6D', value: 6 },
      { name: '7D', value: 7 },
      { name: '8D', value: 8 },
      { name: '9D', value: 9 },
      { name: '10D', value: 10 },
      { name: 'JD', value: 10 },
      { name: 'QD', value: 10 },
      { name: 'KD', value: 10 },
      { name: 'AC', value: 11 },
      { name: '2C', value: 2 },
      { name: '3C', value: 3 },
      { name: '4C', value: 4 },
      { name: '5C', value: 5 },
      { name: '6C', value: 6 },
      { name: '7C', value: 7 },
      { name: '8C', value: 8 },
      { name: '9C', value: 9 },
      { name: '10C', value: 10 },
      { name: 'JC', value: 10 },
      { name: 'QC', value: 10 },
      { name: 'KC', value: 10 },
    ];
    this.$el = document.getElementById('deck');
    this.$el.innerHTML = this.cards.map(card => card.name);
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm adapted from
    // http://bost.ocks.org/mike/shuffle/
    let currentCard;
    let randomCard;
    let unshuffled = this.cards.length;

    // While unshuffled cards remain, (ex: unshuffled == 51)
    while (unshuffled) {
      // Find a randomized, unshuffled card
      randomCard = Math.floor(Math.random() * unshuffled--);

      // And switch it with current element
      currentCard = this.cards[unshuffled];
      this.cards[unshuffled] = this.cards[randomCard];
      this.cards[randomCard] = currentCard;
    }

    this.$el.innerHTML = this.cards.map(card => card.name);
  }
}

document.deck = new Deck();
