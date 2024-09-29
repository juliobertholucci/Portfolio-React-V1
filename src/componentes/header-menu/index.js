import LoginIcon from '../../imagens/login-alt.svg'
import CartIcon from '../../imagens/cart-icon.svg'
import '../header-menu/style.css'
const menuItems = ['Sobre Mim', 'Hard Skills', 'Soft Skills', 'Contato'];
const menuIcons = [LoginIcon, CartIcon] //cria um array com os componentes que queremos exibir
function HeaderMenu () {
    return(
        <ul className='header-menu'>
          {menuItems.map((item) => (
            <li className='header-menu-item'><a>{item}</a></li>
          ))}
          {menuIcons.map((icon) => ( //utilizamos um map que lê o array e retorna um outro array, exibindo os icones
            <li className='header-menu-icon'><img alt='' src={icon}></img></li>
          ))}
        </ul>
    )
}

export default HeaderMenu