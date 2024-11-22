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
export default Header;