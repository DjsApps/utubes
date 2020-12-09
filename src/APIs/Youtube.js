import axios from 'axios';

const KEY = "AIzaSyBtRm-ldphzgh1OMR0i7a6skLVisBbTqHA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})