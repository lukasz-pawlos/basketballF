// import axios from "axios";

// const API_URL = 'http://localhost:8080/api/players';
export class PlayerClass {
    id !: Number;
    name !: String;
    secondName !: String;
    nationality !: String;
    number !: Number;
    age !: Number;

    constructor(data: Object){
        Object.assign(this, data)
    }

    // public constructor() {
    //   }
    //
    // createPlayer(player:PlayerClass ): void {
    //     axios.post(API_URL, player)
    // }
    //
    // getPlayers(): Promise<PlayerClass[]> {
    //     return axios.get(API_URL).then(response => response.data)
    //     .catch(error => console.log(error))
    // }
    //
    // getPlayer(playerId: Number): PlayerClass{
    //     let player!: PlayerClass
    //     axios.get(API_URL + `/${playerId}`).then(response => {
    //         player = response.data;
    //     })
    //     return player;
    // }
}