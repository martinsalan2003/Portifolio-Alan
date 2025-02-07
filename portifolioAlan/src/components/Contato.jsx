
import '../styles/components/contato.sass'
import Iconedivisorio from '../assets/images/icone-divisorio.svg';

export default function Contato(){
   return (
    <section id='contato'>
         <div className='container-contato'> 
           <div className='container-title'>
                 <h1><span>contato</span></h1>
                
                <p>Se você busca um profissional dedicado, com sede de conhecimento e pronto para contribuir para sua equipe ou seu projeto pessoal, ficarei feliz em bater um papo!</p>

                <img src={Iconedivisorio} alt="" />
            </div>
            <div className='container-formulario'>
                <form action="https://formsubmit.co/alanmartinsferreira59@gmail.com" method='POST'>
                    <input id='nome' type="text" name='name' placeholder='Digite seu nome' required onFocus='' />
                    <input id='email' type="email" name="email" placeholder='Digite seu email' required />
                    <input id='numero' type="text" name="numero" placeholder='(11) 912345678' required />

                    <textarea id='nome' name="mensagem" placeholder='Digite sua mensagem' ></textarea>

                    <div className='btn-container'>
                        <button type="submit">Enviar</button>
                    </div>
                    
                    <input type="hidden" name='_subject' value='Novo contato!'/>
                    <input type="hidden" name='_captcha' value='false' />
                    <input type="text" name='_honey' id='honey' />
                    <input type="oculto" nome="_next" valor="https://tela-de-redirecionamento.vercel.app/"></input>
                </form>
            </div>
          

         </div>
    </section>
   )
}