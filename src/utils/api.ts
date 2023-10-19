import axios from 'axios';

export default axios.create({
  baseURL: 'http://15.237.138.133:7000/api/v1/',
});
