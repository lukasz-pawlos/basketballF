import axios from "axios";
import { PlayerClass } from '@/models/response/PlayerClass';
import {NewsClass} from "@/models/response/NewsClass";
import {CreateNewsClass} from "@/models/request/CreateNewsClass";
const API_URL = 'http://localhost:8080/api/news';

export class NewsService {

    static async getNews() {
        try {
            const { data } = await axios.
            get<NewsClass[]>(API_URL);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getNewsById(newsId: Number | String){
        try {
            const { data } = await axios.get<NewsClass>(API_URL + `/${newsId}`);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async createNews(news:CreateNewsClass ){
        try {
            await axios.post<NewsClass>(API_URL, news);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
}
