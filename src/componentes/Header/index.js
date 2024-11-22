<<<<<<< HEAD
import Logo from '../../componentes/logo/'
import HeaderMenu from '../../componentes/header-menu';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    padding: 10px;
    justify-content: center;
`

function Header (){
    return(
    <HeaderContainer>
        <Logo/> {/* utilização do componente criado e exportado */}
        <HeaderMenu/>
    </HeaderContainer>
)}

=======
import Logo from '../../componentes/logo/'
import HeaderMenu from '../../componentes/header-menu';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    padding: 10px;
    justify-content: center;
`

function Header (){
    return(
    <HeaderContainer>
        <Logo/> {/* utilização do componente criado e exportado */}
        <HeaderMenu/>
    </HeaderContainer>
)}

>>>>>>> 1cb36b299fcf660b2674e5ad99568ee7aacf00f2
export default Header;