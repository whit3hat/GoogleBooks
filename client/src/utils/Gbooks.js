import axios from 'axios';
import API_KEY from '../../../config';

const API_KEY = config.API_KEY;


const URL = 'https://www.googleapis.com/books/v1/volumes?';


export const googleBooks = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
        }
    });

    return data;
}