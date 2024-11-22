<<<<<<< HEAD
import styled from "styled-components"
const SectionCard = styled.section`
    max-width:100vw;
    height:30vh;
    background-color:#fff;
    text-align:center;
`
const Titulo = styled.h1`
    font-size:30px;
`
const Link = styled.a`
    font-size:24px;
    margin:10px;
    text-decoration:none;
    color: #000;
    
    :hover{
        color:red;
        cursor:pointer;
    }
`
function Card({title, link1, link2}){
    return(
        <SectionCard>
            <Titulo>{title}</Titulo>
            <Link href={link1} target="_blank"> Linkedin</Link>
            <Link href={link2} target="_blank"> Behance</Link>
        </SectionCard>
    )
}

=======
import styled from "styled-components"
const SectionCard = styled.section`
    max-width:100vw;
    height:30vh;
    background-color:#fff;
    text-align:center;
`
const Titulo = styled.h1`
    font-size:30px;
`
const Link = styled.a`
    font-size:24px;
    margin:10px;
    text-decoration:none;
    color: #000;
    
    :hover{
        color:red;
        cursor:pointer;
    }
`
function Card({title, link1, link2}){
    return(
        <SectionCard>
            <Titulo>{title}</Titulo>
            <Link href={link1} target="_blank"> Linkedin</Link>
            <Link href={link2} target="_blank"> Behance</Link>
        </SectionCard>
    )
}

>>>>>>> 1cb36b299fcf660b2674e5ad99568ee7aacf00f2
export default Card