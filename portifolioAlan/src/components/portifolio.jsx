import '../styles/components/portifolio.sass';

import P1 from '../assets/images/projetos/projeto1.png';
import P2 from '../assets/images/projetos/projeto2.jpg';
import P3 from '../assets/images/projetos/projeto3.jpg';
import P4 from '../assets/images/projetos/projeto4.png';
import P5 from '../assets/images/projetos/projeto5.png';
import P6 from '../assets/images/projetos/projeto6.jpeg';

const projetos = [
    { img: P1, title: 'Projeto 1', subtitle: 'Descrição do projeto 1', link1: '#', link2: '#' },
    { img: P2, title: 'Projeto 2', subtitle: 'Descrição do projeto 2', link1: '#', link2: '#' },
    { img: P3, title: 'Projeto 3', subtitle: 'Descrição do projeto 3', link1: '#', link2: '#' },
    { img: P4, title: 'Projeto 4', subtitle: 'Descrição do projeto 4', link1: '#', link2: '#' },
    { img: P5, title: 'Projeto 5', subtitle: 'Descrição do projeto 5', link1: '#', link2: '#' },
    { img: P6, title: 'Projeto 6', subtitle: 'Descrição do projeto 6', link1: '#', link2: '#' },
];

export default function Portifolio() {
    return (
        <section>
            <div className='title-portifolio'>
                <h1>Portifólio</h1>
            </div>

            <div className="header-portifolio">
                <h1>Bem - vindo!</h1>
            </div>
            <div className="grid-projetos">
                {projetos.map((projeto, index) => (
                    <div key={index} className="cards-projeto">
                        <img src={projeto.img} alt={projeto.title} />
                        <div className="overlay">
                            <h2>{projeto.title}</h2>
                            <p>{projeto.subtitle}</p>
                            <div className="buttons">
                                <a href={projeto.link1} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                <a href={projeto.link2} target="_blank" rel="noopener noreferrer">Código</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer-portifolio">
                <p>Tem muitos mais por vir!</p>
            </div>
        </section>
    );
}
