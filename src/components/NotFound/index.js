import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'
// Write your code here

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'home dark-background' : 'home'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image"
            />
            <h1 className={isDarkTheme ? 'light-text' : ''}>Lost Your Way</h1>
            <p className={isDarkTheme ? 'light-text' : ''}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
