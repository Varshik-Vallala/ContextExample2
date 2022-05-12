import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'
// Write your code here

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'home dark-background' : 'home'}>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
              className="home-image"
            />
            <h1 className={isDarkTheme ? 'light-text' : ''}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
