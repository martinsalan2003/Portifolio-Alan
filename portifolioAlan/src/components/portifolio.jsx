import '../styles/components/portifolio.sass';

import P1 from '../assets/images/projetos/projeto1.png';
import P2 from '../assets/images/projetos/projeto2.jpg';
import P3 from '../assets/images/projetos/projeto3.jpg';
import P4 from '../assets/images/projetos/projeto4.png';
import P5 from '../assets/images/projetos/projeto5.png';
import P6 from '../assets/images/projetos/projeto6.jpeg';

const projetos = [
    { img: P1, title: 'News Home Page', subtitle: 'REACT.JS, VITE.JS, SASS', link1: 'https://news-homepage-nu-flax.vercel.app', link2: 'https://github.com/martinsalan2003/News-homepage' },
    { img: P2, title: 'Card de venda', subtitle: 'REACT.JS, VITE.JS, SASS', link1: 'https://martinsalan2003.github.io/Venda-de-plano/#', link2: 'https://github.com/martinsalan2003/Venda-de-plano?tab=readme-ov-file' },
    { img: P3, title: 'Componente', subtitle: 'REACT.JS, VITE.JS, SASS', link1: 'https://cart-o-de-visualiza-o-de-estat-sticas-x4ji.vercel.app/', link2: 'https://github.com/martinsalan2003/cart-o-de-visualiza--o-de-estat-sticas?tab=readme-ov-file' },
    { img: P4, title: 'Clima-App', subtitle: 'JS, HTML5, CSS3, API', link1: 'https://clima-app-sandy.vercel.app/', link2: 'https://github.com/martinsalan2003/Clima-App' },
    { img: P5, title: 'FREELANCER', subtitle: 'JS, HTML5, CSS3', link1: 'https://victoria-beauty.vercel.app/', link2: 'https://github.com/martinsalan2003/PortifolioVictoria' },
    { img: P6, title: 'CALCULADORA IMC', subtitle: 'JS, HTML5, CSS3', link1: 'https://martinsalan2003.github.io/Calculadora-de-IMC/', link2: 'https://github.com/martinsalan2003/Calculadora-de-IMC' },
];

export default function Portifolio() {
    return (
        <section id='portifolio' className='portifolio'>
            <div className='title-portifolio'>
                <h1>Portifólio</h1>
            </div>

            <div className="header-portifolio">
            </div>
            <div className="grid-projetos">
                {projetos.map((projeto, index) => (
                    <div key={index} className="cards-projeto">
                        <img src={projeto.img} alt={projeto.title} />
                        <div className="overlay">
                            <h2>{projeto.title}</h2>
                            <p>{projeto.subtitle}</p>
                            <div className="btns">
                                <a href={projeto.link1} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                <a href={projeto.link2} target="_blank" rel="noopener noreferrer">Código</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer-portifolio">
                <p>Tem muito mais por vir!</p>
            </div>
        </section>
    );
}
