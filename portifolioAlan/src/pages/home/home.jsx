import Habilidades from "../../components/Habilidades.jsx"
import Header from "../../components/Header.jsx"
import Info from "../../components/Info.jsx"
import Portifolio from "../../components/portifolio.jsx"
import Sobre from "../../components/sobre.jsx"
import Sobremim from '../../components/Sobremim.jsx'
import Contato from '../../components/Contato.jsx'
import Footer from '../../components/Footer.jsx'

function Home() {
  return (
    <>
    <Header />
    <Sobre />
    <Info/>
    <Sobremim/>
    <Habilidades/>
    <Portifolio/>
    <Contato/>
    <Footer/>
    </>
  )
};

export default Home
