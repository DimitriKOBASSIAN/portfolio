import '../styles/Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="Header">
      <h1 className="Header-left">
<Logo className="Header-logo" alt="logo" /> <p className="Header-span">Dimitri KOBASSIAN</p></h1>
<div className="Header-right"><Navbar /></div>
    </header>

  );
}

export default Header;
