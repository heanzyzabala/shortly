import axios from 'axios';

export default async function shorten(url) {
    return axios.post('http://shortly.heanzyzabala.com/api/shorten', { url });
}
