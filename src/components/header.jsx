import '../styles/header.css';
import { Link } from 'react-router-dom';

  function Header() {
    return (
      <header className="heading">
        <Link to="/">Kevin Michael Hunt</ Link>
      </header>
    );
  }
  
  export default Header;