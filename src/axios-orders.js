import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-1fa5f.firebaseio.com/'
});

export default instance;