const React = require('react')
const NavLink = require('react-router-dom').NavLink

function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink exact activeClassName="navigation-active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="navigation-active" to="/tasks">Tasks</NavLink>
      </li>
      <li>
        <NavLink activeClassName="navigation-active" to="/files">Files</NavLink>
      </li>
    </ul>
  )
}

module.exports = Navigation;
