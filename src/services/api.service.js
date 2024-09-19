import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const generator = async (data) => {
    return await axios.post(`${API_BASE_URL}/url/shorten`, data);
};

export const redirect = async (code) => {
    return await axios.get(`${API_BASE_URL}/url/${code}`);
};