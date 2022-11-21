import axios from "axios";
import {CreateStat} from "@/models/request/CreateStat";
import {StatClass} from "@/models/response/StatClass";
const API_URL = 'http://localhost:8080/api/stats';

export class StatsService {

    static async getStatsByPlayerId(playerId: Number | String){
        try {
            const { data } = await axios.get<StatClass[]>(API_URL + `/player/${playerId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getStatsByMatchId(matchId: Number | String){
        try {
            const { data } = await axios.get<StatClass[]>(API_URL + `/match/${matchId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async createStat(stat:CreateStat ){
        try {
            await axios.post<CreateStat>(API_URL, stat);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
}
