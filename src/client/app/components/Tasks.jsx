const React = require('react')
const CpeSearchBox = require('./CpeSearchBox.jsx')
const TaskList = require('./TaskList.jsx')
const api = require('../api')

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cpeSerial: '',
      tasks: [],
    };
    this.updateTasks = this.updateTasks.bind(this)
  }

  componentDidMount() {
    this.updateTasks(this.state.cpeSerial)
  }

  updateTasks(serialNumber) {
    if (!serialNumber) {
      this.setState(function () {
        return {
          tasks: null,
        }
      })
    }
    this.setState(function () {
      return {
        cpeSerial: serialNumber,
      }
    })

    api.fetchTasks(serialNumber)
      .then(function (tasks) {
        this.setState(function () {
          return {
            tasks: tasks
          }
        });
      }.bind(this))
    }

  render() {
    return (
      <div>
        <CpeSearchBox
          onSubmit={this.updateTasks}
        />
        {!this.state.tasks
          ? <p>LOADING!</p>
          : <TaskList tasks={this.state.tasks} />}
      </div>
    )
  }
}

module.exports = Tasks
