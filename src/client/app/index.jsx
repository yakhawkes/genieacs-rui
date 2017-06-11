import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

require('./index.css')

const CpeSearch = require('./components/CpeSearch.jsx')
const Tasks = require('./components/Tasks.jsx')
const Files = require('./components/Files.jsx')

if (module.hot) {
  module.hot.accept()
}

const App = () => (
  <Router>
    <div>
      <h1>Genie!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/files">Files</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={CpeSearch} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/files" component={Files} />
    </div>
  </Router>
)


render(
  <App />,
  document.getElementById('app'),
)
