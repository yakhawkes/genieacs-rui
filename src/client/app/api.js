const axios = require('axios')

module.exports = {
  fetchDevices(serial) {
    const encodedURI = window.encodeURI('/api/devices');

    return axios.get(encodedURI)
      .then(response => response.data)
  },
  fetchTasks(serial) {
    const encodedURI = window.encodeURI('/api/tasks');

    return axios.get(encodedURI)
      .then(response => response.data)
  },
  fetchFiles() {
    const encodedURI = window.encodeURI('/api/files');

    return axios.get(encodedURI)
      .then(response => response.data)
  },
}
