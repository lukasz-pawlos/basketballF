import {MatchClass} from "@/models/response/MatchClass";
import {PlayerClass} from "@/models/response/PlayerClass";

export class StatClass {
    match: MatchClass;
    player: PlayerClass;
    points: number;
    rebounds: number;
    assists: number;
    blocks: number;
    stealss: number
}