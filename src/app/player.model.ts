export class Player {

    id: number;
    name: string;
    points: number;
    gamesPlayed: number;

    static nextId: number = 1;

    constructor(name: string) {
        this.id = Player.nextId++;
        this.name = name;
        this.points = 0;
        this.gamesPlayed = 0;
    }
}