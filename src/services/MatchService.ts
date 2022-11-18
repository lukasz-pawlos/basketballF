import axios from "axios";
import {CoachClass} from "@/models/response/CoachClass";
import {CreateCoachClass} from "@/models/request/CreateCoachClass";
import {MatchClass} from "@/models/response/MatchClass";
import {CreateMatchClass} from "@/models/request/CreateMatchClass";
const API_URL = 'http://localhost:8080/api/matches';


export class MatchService {

    static async getMatches() {
        try {
            const { data } = await axios.
            get<MatchClass[]>(API_URL);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getMatchById(matchId: Number | String){
        try {
            const { data } = await axios.get<MatchClass>(API_URL + `/${matchId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async createMatch(match:CreateMatchClass ){
        try {
            await axios.post<CoachClass>(API_URL, match);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

}