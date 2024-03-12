import '../styles/portfolio.css';
import flavorTrail from '../assets/images/flavor-trail-screenshot (1).png';
import streamScape from '../assets/images/streamscape-screenshot.png';
import chronos from '../assets/images/chronos-screenshot.png';

const PortfolioPage = () => {
    return (
        <>
        <div className='portfolio'>
            <h1>PORTFOLIO</h1>
        </div>
        <div className='projects'>
            <div className='project-card'>
            <div className='deployed-link'>
            <a href="https://shawki45.github.io/Flavor-Trail/">Flavor Trail
                <img src={flavorTrail} alt="Flavor Trail Screenshot"></img>
            </a>
            </div>
            <div className='repo-link'>
            <a href="https://github.com/m-beke/chronos">REPOSITORY</a>
            </div>
            </div>
            <div className='project-card'>
            <div className='deployed-link'>
            <a href="">StreamScape
                <img src={streamScape} alt="StreamScape Screenshot"></img>
            </a>
            </div>
            <div className='repo-link'>
            <a href="https://github.com/m-beke/chronos">REPOSITORY</a>
            </div>
            </div>
            <div className='project-card'>
            <div className='deployed-link'>
            <a href="">Chronos
                <img src={chronos} alt="Chronos Screenshot"></img>
            </a>
            </div>
            <div className='repo-link'>
            <a href="https://github.com/m-beke/chronos">REPOSITORY</a>
            </div>
            </div>
            <div classname='project-card'>
            </div>
            <div className='repo-link'>
                <a href="https://github.com/KvnHunt/NOTREADME">REPOSITORY</a>
            </div>
        </div>
        </>
    )
}

export default PortfolioPage;