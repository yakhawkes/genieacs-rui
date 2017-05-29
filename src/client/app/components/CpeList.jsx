const React = require('react')
const PropTypes = require('prop-types')

function CpeList(props) {
  return (
    <ul>
      {props.devices.map(function (device, index) {
        return (
          <li key={device._id}>
            <ul>
              <li>{device._id}</li>
              <li>{device._deviceId._Manufacturer}</li>
              <li>{device._deviceId._OUI}</li>
              <li>{device._deviceId._ProductClass}</li>
              <li>{device._deviceId._SerialNumber}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

module.exports = CpeList
