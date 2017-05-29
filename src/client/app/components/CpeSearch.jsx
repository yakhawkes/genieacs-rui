const React = require('react')
const PropTypes = require('prop-types')
const CpeSearchBox = require('./CpeSearchBox.jsx')
const api = require('../api')

class CpeSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cpeSerial: '',
      devices: null,
    };
    this.updateDevices = this.updateDevices.bind(this)
    }
  componentDidMount() {
    this.updateDevices(this.state.cpeSerial)
  }
  updateDevices(serialNumber) {
    this.setState(function () {
      return {
        cpeSerial: serialNumber,
        devices: null
      }
    });

    api.fetchDevices(serialNumber)
      .then(function (devices) {
        this.setState(function () {
          return {
            devices: devices
          }
        });
      }.bind(this))
    }

  render() {
    return (
      <div>
        <CpeSearchBox
          onSubmit = {this.updateDevices}
        />{this.state.cpeSerial}<br/>
        {!this.state.devices
          ? <p>LOADING!</p>
          : this.state.devices.length}
      </div>
    )
  }
}

module.exports = CpeSearch
