import styled from "styled-components";

const Input = styled.input`
    font-size:16px;
    color:#fff;
    border: 3px solid white;
    background-color: transparent;
    height:3vh;
    padding:10px;
    width:30vw;
    text-align:center;

    &::placeholder{
        color:#707070;
        font-size:16px;
    }
`
export default Input