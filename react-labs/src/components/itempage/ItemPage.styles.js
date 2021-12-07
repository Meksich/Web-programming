import styled from "styled-components";

export const ItemPageContainer = styled.div`
height: 645px;
`

export const ItemPageImageWraper = styled.div`
margin: 5vh auto;
border-radius: 10px;
border: solid;
width: fit-content;
height: fit-content;
`

export const ItemPageText = styled.div`
margin-top: 8vh;
margin-right: 9vw;
max-width: 40vw;
`

export const ImageBg = styled.img`
min-width: 100vw;
position: absolute;
z-index: -1;
opacity: 0.3;
`

export const ItemPageInput = styled.input`
border-radius: 5px;
    padding-left: 0.5vw;
    width: 12vw;
    height: 5vh;
`

export const InputText = styled.div`
font-size: 14px;
font-weight: bold;
`

export const Dropdown = styled.select`
    border-radius: 5px;
    padding-left: 0.5vw;
    width: 15vw;
    height: 5vh;
`

export const Option = styled.option`
    height: 5vh;
`

export const ItemPagePrice = styled.p`
font-size: 18px;
font-weight: bold;
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

export const AddToCartButton = styled.button`
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
width: fit-content;
`
