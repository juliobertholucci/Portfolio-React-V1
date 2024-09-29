import Logo from '../../componentes/logo/'
import HeaderMenu from '../../componentes/header-menu';
import './style.css'

function Header (){
    return(
    <header className="App-header">
        <Logo/> {/* utilização do componente criado e exportado */}
        <HeaderMenu/>
    </header>
)}

export default Header;