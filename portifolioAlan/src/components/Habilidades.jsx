import '../styles/components/habilidades.sass'
import Html from '../assets/images/habidades/html.svg'
import Css from '../assets/images/habidades/css.svg'
import Js from '../assets/images/habidades/js.svg'
import Ts from '../assets/images/habidades/ts.svg'
import Figma from '../assets/images/habidades/figma.svg'
import Sass from '../assets/images/habidades/sass.svg'
import redes from '../assets/images/habidades/redes.svg'
import Py from '../assets/images/habidades/py.svg'
import ReactIcon from '../assets/images/habidades/react.svg'
import Db from '../assets/images/habidades/db.svg'
import Sql from '../assets/images/habidades/mysql.svg'
import node from '../assets/images/habidades/node.svg'

export default function Habilidades(){
    const habilidadesAtuais = [
        {nome:'HTML 5', icone:Html},
        {nome:'CSS 3', icone:Css},
        {nome:'Javascript', icone:Js},
        {nome:'React Js', icone:ReactIcon},
        {nome:'Sass', icone: Sass},
        {nome:'Figma', icone: Figma},
        {nome:'Node Js', icone: node}]

    const estudando = [
        {nome:'MongoDB', icone:Db},
        {nome:'MySQL', icone:Sql},
        {nome:'Typescript', icone:Ts},
    ]
    
    const outrasHabilidades = [
        {nome:'Redes', icone:redes},
        {nome:'Python', icone:Py},
    ]

    const renderizarCards = (habilidades) => {
        return habilidades.map((habilidade, index) => (
            <div key={index} className="card-habilidade">
                <img src={habilidade.icone} alt={habilidade.nome} />
                <p>{habilidade.nome}</p>
            </div>
        ));
    }

    return (
        <section className="container-habilidades">
            <h1> <span>Habilidades</span></h1>
          
            <div className='container-usando'>
                <h2>Habilidades Atuais :</h2>
                <div className='habilidades-grid'>
                    {renderizarCards(habilidadesAtuais)}
                </div>
            </div>
            <div className='container-aprendendo'>
                <h2>Estudando :</h2>
                <div className='habilidades-grid'>
                    {renderizarCards(estudando)}
                </div>
            </div>
            <div className='container-outros'>
                <h2>Outras Habilidades  :</h2>
                <div className='habilidades-grid'>
                    {renderizarCards(outrasHabilidades)}
                </div>
            </div>
           
        </section>
    )
}
