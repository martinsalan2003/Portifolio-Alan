import { useState, useEffect } from 'react';
import '../styles/components/header.sass';
import Logo from '../assets/images/logo-header.svg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <img src={Logo} alt="logo-dev" />
      
      
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Habilidades</a></li>
          <li><a href="#">Portfólio</a></li>
          <span><a className='cont' href="#">Me Contratar</a></span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;