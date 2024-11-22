<<<<<<< HEAD
import {content} from './contentsData'
import styled from 'styled-components'
import Card from '../Card'
const SectionContent = styled.section`
    max-width:100vw;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
    padding:0;
`

const SectionShowContent = styled.div`
    width:70vw;
    height:50vh;
    display:flex;
    margin:10px;
    padding:10px;
    justify-content:center;
    text-align:center;
    align-items:center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const Title = styled.h1`
    font-size:18px;
    color:#262626;
`
const Text = styled.p`
    font-size:16px;
    color:#262626;

`

function Contents(){
    return(
        <SectionContent>
            {content.map(conteudo => (
                <SectionShowContent key={conteudo.id}>
                    <div>
                        <Title>{conteudo.nome}</Title>
                        <Text>{conteudo.conteudo}</Text>
                    </div>
                </SectionShowContent>
            )) }
        </SectionContent>
    )
}

=======
import {content} from './contentsData'
import styled from 'styled-components'
import Card from '../Card'
const SectionContent = styled.section`
    max-width:100vw;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
    padding:0;
`

const SectionShowContent = styled.div`
    width:70vw;
    height:50vh;
    display:flex;
    margin:10px;
    padding:10px;
    justify-content:center;
    text-align:center;
    align-items:center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const Title = styled.h1`
    font-size:18px;
    color:#262626;
`
const Text = styled.p`
    font-size:16px;
    color:#262626;

`

function Contents(){
    return(
        <SectionContent>
            {content.map(conteudo => (
                <SectionShowContent key={conteudo.id}>
                    <div>
                        <Title>{conteudo.nome}</Title>
                        <Text>{conteudo.conteudo}</Text>
                    </div>
                </SectionShowContent>
            )) }
        </SectionContent>
    )
}

>>>>>>> 1cb36b299fcf660b2674e5ad99568ee7aacf00f2
export default Contents