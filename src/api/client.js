import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3000/data',
});

// eslint-disable-next-line import/prefer-default-export
export const getHotels = () => client.get('/test.json').then(response => response.data);
