import React, {useState} from 'react'

import {MainContainer} from '../../components/MainContainer'
import {StyledLink} from '../../components/StyledLink'

export default function SearchExams () {

    return (
        <MainContainer >
            <StyledLink to = '/busca/professores'> Procurar por professores </StyledLink>
            <StyledLink  to = '/busca/disciplinas'> Procurar por disciplinas </StyledLink>
        </MainContainer> 
    );
}