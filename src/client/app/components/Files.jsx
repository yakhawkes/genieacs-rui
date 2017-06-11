const React = require('react')
const FileList = require('./FileList.jsx')
const api = require('../api')

class Files extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
    };
    this.updateFiles = this.updateFiles.bind(this)
  }

  componentDidMount() {
    this.updateFiles()
  }

  updateFiles() {

    api.fetchFiles()
      .then(function (files) {
        this.setState(function () {
          return {
            files: files
          }
        });
      }.bind(this))
    }

  render() {
    return (
      <div>
        {!this.state.files
          ? <p>LOADING!</p>
          : <FileList files={this.state.files} />}
      </div>
    )
  }
}

module.exports = Files
