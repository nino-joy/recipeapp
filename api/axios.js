import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    // apiKey: '1c8307efbb7c4d5b9f9d5ef7282c937f',
    apiKey: '78bee95f95ef4006b902b86959c1c013',
  },
});

export default instance;
