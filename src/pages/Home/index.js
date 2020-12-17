import React, {useState} from 'react'

import {MainContainer} from '../../components/MainContainer'
import {StyledLink} from '../../components/StyledLink'

export default function Home () {

    return (
        <MainContainer >
            <StyledLink to = '/searching' >View Exams</StyledLink>
            <StyledLink to = '/posting' >Post new Exam </StyledLink>
        </MainContainer> 
    );
}