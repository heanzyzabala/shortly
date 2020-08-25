import axios from 'axios';

export default async function shorten(url) {
    return axios.post(process.env.REACT_APP_SHORTLY_URL, { url });
}
