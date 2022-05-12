import {Link} from 'react-router-dom'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      console.log(isDarkTheme)

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={isDarkTheme ? 'navbar dark' : 'navbar'}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="nav-image"
          />
          <ul className="nav-links">
            <Link to="/" className={isDarkTheme ? 'dark-text' : 'item'}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={isDarkTheme ? 'dark-text' : 'item'}>
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="toggle-btn"
            onClick={changeTheme}
            testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="nav-image"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
