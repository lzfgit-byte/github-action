const axios = require('axios');
const client = axios.create();
client.interceptors.response.use((response) => {
  return response.data;
});
module.exports = {
  axiosGet: (url) => client.get(url),
  axiosPost: (url, data) => client.post(url, data),
};
