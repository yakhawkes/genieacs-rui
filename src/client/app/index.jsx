if (module.hot) {
 module.hot.accept()
}
import React from 'react'
import {render} from 'react-dom'
require('./index.css')
var CpeSearch = require('./components/CpeSearch.jsx');


class App extends React.Component {
  render() {
    const handleSubmit = function() {}
    return (
      <div>
        Genie!
        <CpeSearch
        />
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('app')
)
