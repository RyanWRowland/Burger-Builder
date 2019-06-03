import Axios from 'axios';

const instance = Axios.create({
  baseURL: `https://burger-builder-d90b5.firebaseio.com/`,
});

export default instance;
