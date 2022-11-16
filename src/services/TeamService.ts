import {CreateTeamClass} from "@/models/request/CreateTeamClass";
import axios from "axios";
import {TeamClass} from "@/models/response/TeamClass";
const API_URL = 'http://localhost:8080/api/teams';

export class TeamService {

    static async createTeam(team: CreateTeamClass) {
        try {
            const { data } = await axios.post(API_URL, team)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getTeams() {
        try {
            const { data } = await axios.get<TeamClass[]>(API_URL);
                    return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getTeamById(teamId: Number | String) {
        try {
            const { data } = await axios.get<TeamClass>(API_URL + `/${teamId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
}