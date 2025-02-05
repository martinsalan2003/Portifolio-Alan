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
      // inicia o menu mobile
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#sobre">Sobre mim</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#portifolio">Portfólio</a></li>
          <span><a className='cont' href="#contato">Me Contratar</a></span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;