import Input from "../Input"
import styled from "styled-components"
import {useState} from 'react'
import {pesquisas} from '../SearchBar/dadosSearch'
const Title = styled.h1`
    color:#fff;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:36px;
    margin:0;
`
const SubTitle = styled.h2`
    color: #fff;;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:20px;
    margin:25px 0px;
`
const SectionSearch = styled.section`
    max-width:100vw;
    text-align:center;
    height:80vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
`
const SectionShowSearch = styled.div`  
    height: auto;
    width: 50vw;
    margin-top:30px;
    background-color: #fff;
    padding:30px;
    border:3px solid #656565;
    border-radius:10px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`
function SearchBar(){
    
    const [dadosPesquisados, setDadosPesquisados] = useState([]) 
    const handleInputChange = (evento) => {
        const textoDigitado = evento.target.value.toLowerCase(); //Padroniza em minusculo, acessa o valor do evento, que disparou ao realizar o onblur, transforma em minuscula e armazena na const
        const resultadoPesquisas = textoDigitado !== '' ? //se texto digitado for diferente de vazio executa filter 
        pesquisas.filter((pesquisa) =>
            pesquisa.nome.toLocaleLowerCase().includes(textoDigitado) //Filtra se existe dentro de pesquisas, array de objetos importado, se existe a palavra que foi pesquisada e tratada
        )
        : []; //senão retorna array vazio
        setDadosPesquisados(resultadoPesquisas) //se houver, atualiza o estado e passa o array encontrado para dadosPesquisados
    };
    return(
        <SectionSearch>
            <Title>Encontre o que procura aqui:</Title>  
            <SubTitle>Portfólio, formações, habilidades etc...</SubTitle>
            <Input placeholder="Digite nesse campo" onBlur={handleInputChange}/>
            {dadosPesquisados.map(dado => ( //agora é realizado um map, percorrendo o array que foi passado pelo estado e exibindo abaixo
                <SectionShowSearch key={dado.id}>
                    <Title>{dado.nome}</Title>
                    <SubTitle>{dado.conteudo}</SubTitle> 
                </SectionShowSearch>
            ))}
        </SectionSearch>
    )
}



export default SearchBar