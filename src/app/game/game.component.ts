import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InGamePlayer } from '../in-game-player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  webSocket: WebSocket;
  loading: boolean = true;
  numDots: number = 0;
  playerId: number;
  inGamePlayers: Array<InGamePlayer>;

  ngOnInit(): void {
    setInterval(() => {
      if (this.numDots < 3) {
        this.numDots += 1;
      } else {
        this.numDots = 0;
      }
    }, 500);
    this.webSocket = new WebSocket('wss://dice-blackjack-back.herokuapp.com/diceblackjack');
    this.webSocket.onmessage = message => {
      const [key, value] = message.data.split('::');
      if (key === 'playerId') {
        this.playerId = +value;
      }
      if (key === 'game') {
        const game = JSON.parse(value);
        this.inGamePlayers = game.inGamePlayers;
      }
    }
    this.webSocket.onopen = () => {
      this.loading = false;
      const playerName = prompt('Your name: ');
      this.webSocket.send(`join:${playerName}`);
    }
  }

  handleHit(playerId: number): void {
    this.webSocket.send(`hit:${playerId}`);
  }

  handleStand(playerId: number): void {
    this.webSocket.send(`stand:${playerId}`);
  }

  handleNewGame() {
    this.webSocket.send('reset');
  }
}
