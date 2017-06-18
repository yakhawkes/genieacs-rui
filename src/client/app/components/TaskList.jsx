const React = require('react')
const PropTypes = require('prop-types')
const Reboot = require('./tasks/reboot.jsx')
const SetParameterValues = require('./tasks/setParameterValues.jsx')

function TaskList(props) {
  const taskComponents = {
    reboot: Reboot,
    setParameterValues: SetParameterValues,
  }
  return (
    <ul>
      {props.tasks.map(task =>
        (
          <li key={task._id}>
            {taskComponents[task.name](task)}
          </li>
        ),
      )}
    </ul>
  )
}

module.exports = TaskList

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
}
