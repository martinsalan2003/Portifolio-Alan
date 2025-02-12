import { useState } from 'react';

import Iconedivisorio from '../assets/images/icone-divisorio.svg';
import Iconemanutencao from '../assets/images/icone-manutencao.svg';
import Iconedesigner from '../assets/images/icone-designer.svg';
import IconeFerramenta from '../assets/images/icone-ferramenta.svg';

import '../styles/components/sobremim.sass';

export default function Sobremim() {
    const [expandirTexto, setExpandirTexto] = useState(false);

    const conhecimentos = [
        { icone: Iconedesigner, title: 'Projeto', description: "Tenho experiência em desenvolver interfaces interativas e responsivas, com o intuito de facilitar a visualização e a navegação do usuário. Meu foco é criar layouts intuitivos e funcionais, garantindo uma experiência fluida e agradável. Busco sempre aprimorar a usabilidade e a acessibilidade." },
        { icone: IconeFerramenta, title: 'Desenvolvimento', description: "Experiência em desenvolvimento de software e soluções funcionais. Meu foco é criar sistemas escaláveis, seguros e eficientes, sempre acompanhando novas tecnologias. Gosto do desafio de inovar e encontrar soluções para problemas complexos." },
        { icone: Iconemanutencao, title: 'Manutenção', description: "Experiência com manutenção de software, uma área essencial para garantir o funcionamento contínuo dos sistemas. Meu trabalho envolve correção de erros, melhoria do desempenho e evolução do software de acordo com as novas necessidades que surgem. Apesar dos desafios, gosto dessa área porque exige raciocínio lógico, criatividade e fornecimento de aprendizado constante." }
    ];

    return (
        <section id='sobre' className="Sobre-mim">
            <div className='container-alan'>
                <div className="title">
                    <h1>Sobre Mim</h1>
                </div>
                <div className="conteudo">
                    <p>
                    Transformar ideias em experiências digitais intuitivas é o que me move. Sempre fui apaixonado por tecnologia, e ao longo da minha jornada, aprimorei minhas habilidades para criar interfaces funcionais, escaláveis e acessíveis. Mas isso é só o começo...
                    </p>
                    
                    {expandirTexto && (
                        <p>
                           Olá! Eu chamo Alan Martins Ferreira, sou de Itaquaquecetuba - SP, e desde sempre fui fascinado por tecnologia. Minha curiosidade me levou a explorar cada detalhe do meu computador, tentando entender como tudo funcionava. Ao decorrer de anos acabei descobrindo a profissão de programador, na qual me despertou interesse em saber mais sobre a profissão, Atualmente, estou focado em desenvolvimento Front-End, onde busco criar interfaces intuitivas, responsivas e acessíveis. Estou cursando Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul (3º semestre), aprimorando minhas habilidades para construir experiências digitais inovadoras. Sou movido por desafios e adoro aprender novas tecnologias. Além das habilidades técnicas, possuo forte capacidade de resolução de problemas, comunicação eficaz, aprendizado contínuo, receptividade a feedback, trabalho em equipe, adaptabilidade, gestão de tempo, atenção aos detalhes o que me permite enfrentar qualquer obstáculo com determinação. Trabalho bem em equipe, tenho boa comunicação e estou sempre disposto a compartilhar conhecimento. Estamos abertos a novas oportunidades e prontos para enfrentar qualquer desafio!
                        </p>
                    )}

                    <div className='container-btn'>
                        <button onClick={() => setExpandirTexto(!expandirTexto)}>
                            {expandirTexto ? "Mostrar menos" : "Explorar"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="divisoria">
                <img src={Iconedivisorio} alt="Divisório" />
            </div>

            <div className="conhecimentos">
                {conhecimentos.map((item, index) => (
                    <div className={`card ${item.title === 'Manutenção' ? 'manutencao-card' : ''}`} key={index}>
                        <div className="icone-fundo">
                            <img src={item.icone} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <div className='divisoria'>
                <img src={Iconedivisorio} alt="" />
            </div>
        </section>
    );
}