const React = require('react')
const PropTypes = require('prop-types')

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map(function (task, index) {
        return (
          <li key={task._id}>
            <ul>
              <li>{task.name}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

module.exports = TaskList
