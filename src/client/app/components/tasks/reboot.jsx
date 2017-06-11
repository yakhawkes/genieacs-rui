const React = require('react')
const PropTypes = require('prop-types')

function Reboot(props) {
  return (
    <li>
      <ul>
        <li>{props.name}</li>
        <li>{props.device}</li>
      </ul>
    </li>
  )
}

module.exports = Reboot
