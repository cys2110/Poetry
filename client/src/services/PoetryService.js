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
    getAllAuthors() {
        return apiClient.get('/author')
    },
    getPoemsByAuthor(name) {
        return apiClient.get(`/author/${name}/title`)
    },
    getPoem(name, title) {
        return apiClient.get(`/author,title/${name};${title}`)
    }
}