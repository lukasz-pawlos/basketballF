import axios from "axios";
import { PlayerClass } from '@/models/response/PlayerClass';
import {CreatePlayerClass} from "@/models/request/CreatePlayerClass";
const API_URL = 'http://localhost:8080/api/players';

export class PlayerService {

    static async getPlayers() {
        try {
            const { data } = await axios.
                get<PlayerClass[]>(API_URL);
                return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getPlayerById(playerId: Number | String){
        try {
            const { data } = await axios.get<PlayerClass>(API_URL + `/${playerId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async createPlayer(player:CreatePlayerClass ){
        try {
            await axios.post<PlayerClass>(API_URL, player);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
}

