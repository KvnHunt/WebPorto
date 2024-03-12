import '../styles/resume.css';
import css from '../assets/images/css3.svg';
import javascript from '../assets/images/javascript.svg';
import jQuery from '../assets/images/jquery.svg'
import nodeJS from '../assets/images/nodejs-icon.svg';
import mongoDB from '../assets/images/mongodb.svg';
import mySQL from '../assets/images/mysql.svg';
import sequelize from '../assets/images/sequelize.svg';
import handlebars from '../assets/images/handlebars.svg';
import npm from '../assets/images/npm-2.svg';
import reactImg from '../assets/images/react.svg';

const ResumePage = () => {
    return (
        <>
            <div className='resume-bg'>
                <div className='resume'>
                    <h1>Resume of Languages and DBs learned.</h1>
                </div>
                <div className='language-icons'>
                    <img src={css}></img>
                    <img src={javascript}></img>
                    <img src={jQuery}></img>
                    <img src={nodeJS}></img>
                    <img src={handlebars}></img>
                    <img src={npm}></img>
                    <img src={mySQL}></img>
                    <img src={sequelize}></img>
                    <img src={mongoDB}></img>
                    <img src={reactImg}></img>
                </div>
            </div>
        </>

    )
}

export default ResumePage;