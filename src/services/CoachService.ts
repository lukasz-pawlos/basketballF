import axios from "axios";
import {CoachClass} from "@/models/response/CoachClass";
import {CreateCoachClass} from "@/models/request/CreateCoachClass";
const API_URL = 'http://localhost:8080/api/coaches';

export class CoachService {

    static async getCoaches() {
        try {
            const { data } = await axios.
            get<CoachClass[]>(API_URL);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getCoachById(CoachId: Number | String){
        try {
            const { data } = await axios.get<CoachClass>(API_URL + `/${CoachId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async createCoach(Coach:CreateCoachClass ){
        try {
            await axios.post<CoachClass>(API_URL, Coach);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
}

