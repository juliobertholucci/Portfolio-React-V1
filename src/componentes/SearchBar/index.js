import Input from "../Input"
import styled from "styled-components"
import {useState} from 'react'
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
    const [textoDigitado, setTextoDigitado] = useState('') 
    {/*setTextoDigitado tras o que foi digitado e salva em textoDigitado*/}
    return(
        <SectionSearch>
            <Title>Encontre o que procura aqui:</Title>  
            <SubTitle>Portfólio, formações, visão etc...</SubTitle>
            <Input placeholder="Digite nesse campo" onBlur={evento => setTextoDigitado(evento.target.value)}/>
            <p>{textoDigitado}</p>  {/*evento contém um objeto com as infos do evento onBlur|| .target é uma referencia ao elemento de disparo do onblur */}
        </SectionSearch>
    )
}

export default SearchBar