import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  timeout: 1000,
  params: {
    apiKey: '48b77c67d9e84868bb3899bd141bf223',
  },
});

export default instance;
