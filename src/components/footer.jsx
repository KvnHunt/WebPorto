import '../styles/footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className='app-footer'>
        <Link to='https://github.com/KvnHunt'>GITHUB</Link>
        <Link to='www.linkedin.com/in/kevin-hunt-6752ab2ab'>LINKEDIN</Link>
      </div>
    );
  }

  export default Footer;