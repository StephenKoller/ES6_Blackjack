import Deck from './deck';
import Player from './player';

function app() {
  document.dealer = new Player();
  document.player = new Player();
  document.deck = new Deck();
  document.deck.$el = document.getElementById('deck');
  document.deck.$el.innerHTML = document.deck.cards.map(card => card.name);
}

app();
