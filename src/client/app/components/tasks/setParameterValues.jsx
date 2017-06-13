const React = require('react')
const PropTypes = require('prop-types')

function SetParameterValues(props) {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.device}</li>
      <li>
        parameterValues
        <ul>
          {props.parameterValues.map(function (parameterValue, index) {
            return (
              <li key={parameterValue[0]}>
                {parameterValue[0]} : {parameterValue[1]}
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  )
}

module.exports = SetParameterValues

SetParameterValues.propTypes = {
  name: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  parameterValues: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
}
