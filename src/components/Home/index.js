import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'
// Write your code here

const Home = () => (
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
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
              className="home-image"
            />
            <h1 className={isDarkTheme ? 'light-text' : ''}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
