import LoginIcon from '../../imagens/login-alt.svg'
import CartIcon from '../../imagens/cart-icon.svg'
import styled from 'styled-components';

const HeaderMenuItem = styled.li`
    text-align: center;
    align-content: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding: 0px 25px;
  
  :hover{
    color:#e51e18;
    transition: 0.5s;
  }
`
const HeaderMenuIcon = styled.li `
  img{
    height: 30px;
    width: 30px;
    margin: 0px 15px;
    color:#e51e18;
    cursor: pointer;
  }
`
const HeaderMenuContainer = styled.ul`
  display: flex;
`
const menuItems = ['Sobre Mim', 'Formações', 'Habilidades', 'Contato'];
const menuIcons = [LoginIcon, CartIcon] //cria um array com os componentes que queremos exibir
function HeaderMenu () {
    return(
        <HeaderMenuContainer>
          {menuItems.map((item) => (
            <HeaderMenuItem><a>{item}</a></HeaderMenuItem>
          ))}
          {menuIcons.map((icon) => ( //utilizamos um map que lê o array e retorna um outro array, exibindo os icones
            <HeaderMenuIcon><img alt='' src={icon}></img></HeaderMenuIcon>
          ))}
        </HeaderMenuContainer>
    )
}

export default HeaderMenu