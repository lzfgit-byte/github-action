const axios = require('axios');
axios.interceptors.response = (config) => {
  const token = useAuthorization();
  if (token.value) {
    config.headers.set(AUTHORIZATION_KEY, `Bearer ${token.value?.access_token}`);
  }
  if (isBaseType(config.data)) {
    config.headers.set('Content-Type', 'application/json;charset=UTF-8');
  }
  return config;
};
