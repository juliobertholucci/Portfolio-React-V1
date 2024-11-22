<<<<<<< HEAD
import logo from '../../imagens/JB.png'
import styled from 'styled-components';

const HeaderLogoContainer = styled.div`
  display: flex;
`
const HeaderImage = styled.img`
  width:70px;
  height:70px;
`
const HeaderLogoName = styled.p`
  font-size: 20px;
  margin-left: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: center;
  height: 100%;
`


function Logo() { //criar uma função e inserir o código dentro do return
    return(
        <HeaderLogoContainer>
          <HeaderImage src={logo} alt='logotipo'></HeaderImage>
          <HeaderLogoName>Julio <strong>Bertholucci</strong></HeaderLogoName>
        </HeaderLogoContainer>
    )
}

=======
import logo from '../../imagens/JB.png'
import styled from 'styled-components';

const HeaderLogoContainer = styled.div`
  display: flex;
`
const HeaderImage = styled.img`
  width:70px;
  height:70px;
`
const HeaderLogoName = styled.p`
  font-size: 20px;
  margin-left: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: center;
  height: 100%;
`


function Logo() { //criar uma função e inserir o código dentro do return
    return(
        <HeaderLogoContainer>
          <HeaderImage src={logo} alt='logotipo'></HeaderImage>
          <HeaderLogoName>Julio <strong>Bertholucci</strong></HeaderLogoName>
        </HeaderLogoContainer>
    )
}

>>>>>>> 1cb36b299fcf660b2674e5ad99568ee7aacf00f2
export default Logo; //exportando componente para o restante do código