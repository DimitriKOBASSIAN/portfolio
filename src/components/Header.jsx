import '../styles/Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Navbar from './Navbar';

function Header() {
  return (
      <header className="Header">
          <div className="Header-left">
          <Logo className="Header-logo" alt="logo" /> 
              <span className="Header-span">Dimitri KOBASSIAN</span>
          </div>
          <div className="Header-right">
              <Navbar />
          </div>
      </header>
  );
}

export default Header;