const React = require('react');
const PropTypes = require('prop-types');
var CpeSearchBox = require('./CpeSearchBox.jsx');

class CpeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpeSerial: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(serialNumber) {
      this.setState(function () {
        return{
          cpeSerial: serialNumber
        }
      })
    }
  render() {
    return (
      <div>
        <CpeSearchBox
          onSubmit = {this.handleSubmit}
        />{this.state.cpeSerial}
      </div>
    )
  }
}

module.exports = CpeSearch
