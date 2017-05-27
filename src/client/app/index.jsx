import React from 'react'
import {render} from 'react-dom'
require('./index.css')

class App extends React.Component {
  render() {
    return (
      <p>
        Genie!
      </p>
    )
  }
}

render(
  <App/>,
  document.getElementById('app')
)
