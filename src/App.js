import Header from './componentes/Header/';
import SearchBar from './componentes/SearchBar'
import Contents from './componentes/Contents'
import styled from 'styled-components';
{/*Cria uma variável e atribui o styled.div. Styled pode atribuir outras tags como p, h1, header etc*/} 
const AppContainer = styled.div`    
    max-width: 100vw; /*view width*/
    height: 100vh; /*view height*/
    background-color: #282f32;
  li{
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <SearchBar/>
      <Contents/>
    </AppContainer>
  );
}

export default App;
