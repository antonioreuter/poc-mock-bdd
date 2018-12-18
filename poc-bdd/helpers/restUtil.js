const axios = require('axios');
const buildUrl = require('build-url');

const baseUrl = "http://localhost:8080"

const get = async (url) => {
  const realUrl = buildUrl(baseUrl, { path: url });
  try {
    return await axios.get(realUrl, httpConfig());
  } catch(err) {
    return err.response;
  }
};

httpConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
}

module.exports = {
  get
}