import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

require('./index.css')

const CpeSearch = require('./components/CpeSearch.jsx')

if (module.hot) {
  module.hot.accept()
}

const Tasks = () => (
  <div>
    <h2>tasks</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <h1>Genie!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={CpeSearch} />
      <Route path="/tasks" component={Tasks} />
    </div>
  </Router>
)


render(
  <App />,
  document.getElementById('app'),
)
