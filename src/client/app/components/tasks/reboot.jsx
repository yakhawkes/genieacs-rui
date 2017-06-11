const React = require('react')
const PropTypes = require('prop-types')

function Reboot(props) {
    return (
      <ul>
        <li>{props.name}</li>
        <li>{props.device}</li>
      </ul>
  )
}

module.exports = Reboot
