import { useState } from 'react';
import '../styles/components/info.sass';
import Icone from '../assets/images/info.icon.svg'

export default function Info() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className={`container-info ${expanded ? 'expanded' : ''}`}>
           <h1>RESUMO DE QUALIFICAÇÃO </h1>
            <p>
             em transição de carreira da área de Suporte Técnico para Desenvolvimento Web. Experiência em contribuir no desenvolvimento de projetos, garantindo o alinhamento com as últimas tendências e ferramentas do setor, 
            como aplicações tecnológicas. Vivência no uso de linguagens de programação como JavaScript, além de HTML para marcação e CSS para estilização. Atuando como Front-End, tenho promovido o desenvolvimento de projetos, aplicativos, sistemas web e softwares personalizados. Habilidade em compreender as necessidades de usuários e clientes, aplicando soluções eficazes.
            </p>
            <div className="icone-container">
                <img className='icone' src={Icone} alt="" />
            </div>
            {expanded && (
                <p>
                   Além disso, possuo experiência com frameworks e bibliotecas modernas, como React.js, para a construção de interfaces dinâmicas e responsivas, bem como o uso de pré-processadores como Sass para otimizar e modularizar estilos. Minha familiaridade com Node.js me permite compreender e colaborar no desenvolvimento de soluções full stack, ampliando minha atuação no ciclo completo do desenvolvimento de software.

Tenho também conhecimento em versionamento de código com Git e GitHub, garantindo organização e colaboração eficiente em projetos. Minha abordagem é centrada na melhoria contínua, buscando sempre aprimorar habilidades técnicas e metodologias ágeis para entregar produtos de alta qualidade.
<br />
<br />
Atualmente, estou aprimorando minhas habilidades por meio de projetos práticos e contribuições em código aberto, consolidando meu conhecimento e expandindo minha capacidade de resolver problemas do mundo real. Meu objetivo é evoluir constantemente na área de desenvolvimento web e contribuir de forma significativa para a criação de soluções inovadoras e impactantes.
                </p>
            )}
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Ler Menos' : 'Ler Mais'}
            </button>
        </section>
    );
}