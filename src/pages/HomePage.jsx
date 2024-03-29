import { Link } from "react-router-dom";
import '../styles/home.css';

const HomePage = () => {
  return (
    <>
    <div className="home">
    <div className='home-heading'>
      <h1>ABOUT</h1>
      <h1>PORTFOLIO</h1>
      <h1>RESUME</h1>
      <h1>CONTACT</h1>
    </div>
    <div className="home-cards">
      <div className="home-about">
        <p>Learn more about me!</p>
        <Link to='/About'>MORE INFO</Link>
      </div>
      <div className="home-portfolio">
        <p>Things I have worked on! </p>
        <Link to='/Portfolio'>MORE INFO</Link>
      </div>
      <div className="home-resume">
        <p>Check out my qualifications!</p>
        <Link to='/Resume'>INFO</Link>
      </div>
      <div className="home-contact">
        <p>Call or Give an Email!</p>
        <Link to='/Contact'>INFO</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default HomePage;