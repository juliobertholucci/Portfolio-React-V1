import styled from "styled-components";

const Input = styled.input`
    font-size:16px;
    color:#000;
    border: 3px solid white;
    background-color: #fff;
    height:3vh;
    padding:10px;
    width:30vw;
    text-align:center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    &::placeholder{
        color:#707070;
        font-size:16px;
    }
`
export default Input