import logo from '../../imagens/JB.png'
import './style-logo.css'
function Logo() { //criar uma função e inserir o código dentro do return
    return(
        <div className='header-logo'>
          <img src={logo} width={'70px'} height={'70px'} alt='logotipo'></img>
          <p className='header-logo-name'>Julio <strong>Bertholucci</strong></p>
        </div>
    )
}

export default Logo; //exportando componente para o restante do código