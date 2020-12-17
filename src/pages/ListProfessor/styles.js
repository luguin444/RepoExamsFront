import styled from 'styled-components'

export const Container = styled.h1`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.7rem;
`

export const H1 = styled.h1`
    color: #fff;
    margin-top: 3rem;
    font-size: 3rem;
    text-align: center;
`

export const List = styled.ul`
    color: #fff;
    margin-top: 3rem;
    width: 100%;
`
export const Title = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: #676767;
    border-bottom: 1px solid black;

    span {
        margin: 1rem 1rem;
        text-align: center;
        font-size: 1.15rem;
    }
`