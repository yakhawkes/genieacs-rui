const React = require('react')
const PropTypes = require('prop-types')

class CpeSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpeSerial: '',
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const value = event.target.value

    this.setState(() => (
      {
        cpeSerial: value,
      }
    ));
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.cpeSerial)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="cpeSerial">Serial number</label>
        <input
          id="cpeSerial"
          placeholder=""
          type="text"
          value={this.state.cpeSerial}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button disabled={!this.state.cpeSerial} >
          Submit
        </button>
      </form>
    )
  }
}

CpeSearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

module.exports = CpeSearchBox;
