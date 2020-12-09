import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { faDice, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { InGamePlayer } from '../in-game-player.model';
import { Player } from '../player.model';

@Component({
  selector: 'app-in-game-player',
  templateUrl: './in-game-player.component.html'
})
export class InGamePlayerComponent {

  @Input() inGamePlayer: InGamePlayer;
  @Output('hit') hitEventEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output('stand') standEventEmitter: EventEmitter<void> = new EventEmitter<void>();
  
  getDieIcon(dieValue: number): any {
    switch (dieValue) {
      case 1:
        return faDiceOne;
      case 2:
        return faDiceTwo;
      case 3:
        return faDiceThree;
      case 4:
        return faDiceFour;
      case 5:
        return faDiceFive;
      case 6:
        return faDiceSix;
    }
  }

  handleHit(): void {
    this.hitEventEmitter.emit();
  }

  handleStand(): void {
    this.standEventEmitter.emit();
  }
}
