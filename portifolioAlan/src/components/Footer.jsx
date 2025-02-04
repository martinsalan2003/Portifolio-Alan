import '../styles/components/footer.sass'
import Seta from '../assets/images/seta-cima.svg'


export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section>
            <div className='container-footer'>
                <div className='content-footer' onClick={scrollToTop}>
                    <img src={Seta} alt="Seta para cima" />
                    <h2>Voltar ao topo</h2>
                </div>
            </div>
        </section>
    );
}