import { Component, OnInit } from '@angular/core';
import { InGamePlayer } from '../in-game-player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  webSocket: WebSocket;
  inGamePlayers: Array<InGamePlayer>;

  ngOnInit(): void {
    this.webSocket = new WebSocket('wss://dice-blackjack-back.herokuapp.com/diceblackjack');
    this.webSocket.onmessage = message => {
      const game = JSON.parse(message.data);
      this.inGamePlayers = game.inGamePlayers;
    }
    this.webSocket.onopen = () => {
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
