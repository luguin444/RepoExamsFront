import React, {useState} from 'react'

import {MainContainer} from '../../components/MainContainer'
import {StyledLink} from '../../components/StyledLink'

export default function Home () {

    return (
        <MainContainer >
            <StyledLink to = '/busca' >Buscar provas</StyledLink>
            <StyledLink to = '/postar' >Postar uma nova prova </StyledLink>
        </MainContainer> 
    );
}