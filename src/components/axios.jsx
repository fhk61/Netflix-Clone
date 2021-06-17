import axios from 'axios';

const instance = axios.create({
    base_url: 'https://api.themoviedb.org/3'
});

export default instance;