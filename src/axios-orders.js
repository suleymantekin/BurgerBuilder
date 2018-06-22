import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-87626.firebaseio.com/'

});

export default instance;