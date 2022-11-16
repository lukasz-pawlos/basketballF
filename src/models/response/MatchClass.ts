import {TeamClass} from "@/models/response/TeamClass";

export class MatchClass {
    id: Number;
    homeTeam: TeamClass;
    guestTeam: TeamClass;
    homeScore: Number;
    guestScore: Number;
    date: Date;

}