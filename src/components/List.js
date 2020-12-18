import React from 'react'
import styled from 'styled-components';

export default function List (props) {

    const {items} = props

    function redirectToTheExamPage(link) {
        location.href = `${link}`;
    }

    if (items.length === 0) return <StyledList> <li> Nenhuma prova </li> </StyledList>

    return (
        <StyledList> 
            
            { items.map( i => <li onClick = {() => redirectToTheExamPage(i.link)}>{`${i.name} - ${i.subject}`}</li> )}
        </StyledList>
    );
}

const StyledList = styled.ul`

    margin: 0 auto;

    li{
        color: #fff;
        padding-left: 0.7rem;
        margin-top: 0.7rem;
        font-size: 1.3rem;
        cursor: pointer;
    }
`
