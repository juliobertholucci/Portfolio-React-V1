import './App.css';
import Logo from './componentes/logo'
import LoginIcon from './imagens/login-alt.svg'
import CartIcon from './imagens/cart-icon.svg'

const menuItems = ['Sobre Mim', 'Hard Skills', 'Soft Skills', 'Contato'];
const menuIcons = [LoginIcon, CartIcon] //cria um array com os componentes que queremos exibir

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo> {/* utilização do componente criado e exportado */}
        <ul className='header-menu'>
          {menuItems.map((item) => (
            <li className='header-menu-item'><a>{item}</a></li>
          ))}
          {menuIcons.map((icon) => ( //utilizamos um map que lê o array e retorna um outro array, exibindo os icones
            <li className='header-menu-icon'><img src={icon}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
