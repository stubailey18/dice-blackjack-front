import { Player } from './player.model';

export class InGamePlayer {

    player: Player;
    die1Value: number;
    die2Value: number;
    numRolls: number;
    standing: boolean;
    total: number;

    constructor(player: Player) {
        this.player = player;
        this.die1Value = undefined;
        this.die2Value = undefined;
        this.numRolls = 0;
        this.standing = false;
        this.total = 0;
    }
}