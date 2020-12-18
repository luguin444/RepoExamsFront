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
            { items.map( i => <li key = {i.id} onClick = {() => redirectToTheExamPage(i.link)}>{`${i.name} - ${i.subject || i.professor}`}</li> )}
        </StyledList>
    );
}

const StyledList = styled.ul`

    margin: 0 auto;

    li{
        color: #fff;
        margin-top: 0.7rem;
        font-size: 1.3rem;
        cursor: pointer;
        text-align: center;

        @media (max-width: 600px) {
            text-align: initial;
            padding-left: 0.7rem;
        }
    }
`
