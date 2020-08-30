import axios from 'axios';
import { query } from 'express';

const URL = '';
const API_KEY = '';

export const googleBooks = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,

        }
    });

    return data;
}