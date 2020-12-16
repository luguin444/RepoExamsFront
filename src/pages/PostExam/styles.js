import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input, 
    select,
    button {
        width: 75%;
        max-width: 500px;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 0.8rem;
        outline: 0;
        margin: 1rem 0;
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
        padding-left: 0.7rem;
    }

    button {
        width: 50%;
        max-width: 300px;
        margin-top: 2rem;
        background-color: #aaa;
        padding: 0;
    }
`