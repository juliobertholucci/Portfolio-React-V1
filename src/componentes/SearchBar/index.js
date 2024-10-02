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
                <div key={dado.id}>
                    <h1>{dado.nome}</h1>
                    <p>{dado.conteudo}</p> 
                </div>
            ))}
        </SectionSearch>
    )
}

export default SearchBar