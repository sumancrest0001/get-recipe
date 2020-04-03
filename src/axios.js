import axios from 'axios';
import key from './config';

const instance = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/random?number=15&apiKey=${key}`,
});

export default instance;
