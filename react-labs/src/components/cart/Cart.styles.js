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
bottom: 15vh;
width: 80vw;
margin: 2vh 10vw;
`

export const CartItemStyled = styled.div`
width: 70vw;
margin: auto;
margin-bottom: 3vh;
border: solid;
border-radius: 5px;
`

export const TitleStyled = styled.h4`
margin: auto 1vw;
`

export const Pricing = styled.div`
bottom: 22vh;
margin-top: auto;
margin-bottom: auto;
margin-left: 73.5vw;
`

export const IncreaseButton = styled.button`
margin: auto 2vw;
width: 27px;
background-color: white;
  border-color: black;
  border-radius: 6px;
  :hover{
    background-color: rgb(46, 46, 46);
  color: white;
  }
`

export const Amount = styled.p`
margin: auto 1vw;
`

export const DecreaseButton = styled.button`
margin: auto 2vw;
width: 27px;
background-color: white;
  border-color: black;
  border-radius: 6px;
  :hover{
    background-color: rgb(46, 46, 46);
  color: white;
  }
`

export const NoItems = styled.h4`
margin: 200px 35vw;
  font-size: 30px;
  font-weight: normal;
  font-style: italic;
  color: lightgray;
  text-align: center;
  `