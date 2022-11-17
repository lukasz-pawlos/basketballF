import axios from "axios";
const API_URL = 'http://localhost:8080/api/password';

export class PasswordService {

    static async checkPassword(password: String) {
        try {
            const config = { headers: {'Content-Type': "text/plain"} };
            const { data, status } = await axios.
            put(API_URL, password, config);
            return status;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
            }
        }
    }
}