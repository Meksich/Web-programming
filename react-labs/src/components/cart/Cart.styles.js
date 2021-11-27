import styled from "styled-components";

export const CartWrapper = styled.div`
min-height: 78vh;
margin: auto;
`

export const StyledHeader = styled.h3`
width: 97vw;
text-align: end;
`

export const GoBackButton = styled.button`
background-color: white;
    border-radius: 5px;
    padding-left: 0.5vw;
    width: 15vw;
    height: 5vh;
    :hover{
        background-color: #D9d9dc;
    }
`

export const BuyButton = styled.button`
background-color: black;
    border-radius: 5px;
    padding-left: 0.5vw;
    width: 15vw;
    height: 5vh;
    color: #C6C6C6;
    :hover{
        background-color: #454545;
    }
`

export const Buttons = styled.div`
position: absolute;
bottom: 15vh;
width: 80vw;
margin: 0 10vw;
`

export const CartItemStyled = styled.div`
width: 70vw;
margin: auto;
border: solid;
border-radius: 5px;
`

export const TitleStyled = styled.h4`
margin: auto 1vw;
`
