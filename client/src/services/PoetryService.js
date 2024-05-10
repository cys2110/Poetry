import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://poetrydb.org',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllAuthors(){
        return apiClient.get('/author')
    }
}