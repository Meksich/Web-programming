import styled from "styled-components";

export const Container = styled.div`
height: 645px;
`

export const StyledText = styled.p`
width: 500px;
text-align: end;
font-style: italic;
`

export const ImageBg = styled.img`
position: absolute;
z-index: -1;
`

export const StyledButton = styled.button`
border-radius: 20px;
:hover{
    font-style: italic;
}
`
export const StyledHeader = styled.h3`
width: 500px;
text-align: end;
font-style: italic;
`
export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 20px 0;
`
export const CardDeck = styled.div`
border-radius: 10px;
border: solid;
`
export const MoreButton = styled.button`
background-color: white;
border-radius: 5px;
padding-left: 0.5vw;
width: 15vw;
height: 5vh;
margin: 2vh 40.6vw;

:hover{
    background-color: #D9d9dc;
}
`
