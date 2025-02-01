import '../styles/components/sobre.sass';
import Alan from '../assets/images/alan-sobre.png';
import wpp from '../assets/images/whatsapp.svg'
import git from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

export default function Sobre() {
    return (
        <section className='container'>
            <div className='container-sobre'>
                <div className="apresentacao">
                    <h1>Olá, Sou</h1>
                    <div className='nome'>
                        <h2>Alan Martins</h2>
                        <p>Desenvolvedor Front-End / Desenvolvedor Web</p>
                    </div>
                    <div className="icones">
                        <a href="https://api.whatsapp.com/send?phone=11992946537&text=Ola%20Alan,%20estava%20olhando%20um%20pouco%20do%20seu%20trabalho%20no%20Github" target="_blank"><img src={wpp} alt="whatsapp" /></a>
                        <a href="https://github.com/martinsalan2003"target="_blank"><img src={git} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/alan-martins-ferreira-5a8a48233/"target="_blank"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                </div>
                <div className="imagem-alan">
                    <img src={Alan} alt="Alan Martins" />
                </div>
            </div>
        </section>
    );
}