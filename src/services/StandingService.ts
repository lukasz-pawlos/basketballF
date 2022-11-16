import axios from "axios";
import {StandingClass} from "@/models/response/StandingClass";
const API_URL = 'http://localhost:8080/api/standings';

export class StandingService {

    static async getStandings() {
        try {
            const { data } = await axios.get<StandingClass[]>(API_URL);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async updateWin(teamId: Number | String) {
        try {
            await axios.patch(API_URL + `/${teamId}/win`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async updatelose(teamId: Number | String) {
        try {
            await axios.patch(API_URL + `/${teamId}/lose`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
}