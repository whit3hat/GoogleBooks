import axios from 'axios';
import { query } from 'express';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';


export const googleBooks = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,

        }
    });

    return data;
}