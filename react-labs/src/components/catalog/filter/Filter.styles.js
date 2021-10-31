import styled from "styled-components";

export const Dropdown = styled.select`
    border-radius: 5px;
    padding-left: 0.5vw;
    width: 15vw;
    height: 5vh;
`

export const Option = styled.option`
    height: 5vh;
`

export const FilterWraper = styled.div`
    height: 10vh;
    width: 60vw;
`

export const FilterSpace = styled.div`
    background-color: #f8f9fa;
`

export const FilterButton = styled.button`
    background-color: white;
    border-radius: 5px;
    padding-left: 0.5vw;
    width: 15vw;
    height: 5vh;

    :hover{
        background-color: #D9d9dc;
    }
`
