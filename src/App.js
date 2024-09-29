import Header from './componentes/Header/';
import styled from 'styled-components';
{/*Cria uma variável e atribui o styled.div. Styled pode atribuir outras tags como p, h1, header etc*/} 
const AppContainer = styled.div`    
    max-width: 100vw; /*view width*/
    height: 120vh; /*view height*/
    background-color: #282f32;

  li{
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
