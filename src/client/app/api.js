const axios = require('axios')

module.exports = {
  fetchDevices(serial) {
    const encodedURI = window.encodeURI('/api/devices');

    return axios.get(encodedURI)
      .then(response => response.data)
  },
}
