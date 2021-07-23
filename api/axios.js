import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: '1c8307efbb7c4d5b9f9d5ef7282c937f',
  },
});

export default instance;
