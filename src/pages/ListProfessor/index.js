import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Container, H1, List, Item, Title} from './styles'
import { useHistory } from 'react-router';

export default function ListProfessor () {

    const history = useHistory();

    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        // const promise = axios.get('http://localhost:3000/list-professors');
        const promise = axios.get('https://repo-exams-front.herokuapp.com/list-professors');
        promise.then( (res) => {
            setProfessors(res.data);
        }).catch(e => {
            alert('Erro ao obter professores')
            history.push('/');
        })
    }, []);

    return (
            <Container>
                <H1>LISTA DE PROFESSORES</H1>
                <List>
                    <Title>
                        <h3 className = "title"> Nome </h3>
                        <h3 className = "title"> Provas </h3>
                    </Title>
                    { professors.map( p => {
                        return( 
                            <Item key = {p.id} onClick = {() => history.push(`/busca/professores/${p.id}`)}>
                                <span > {p.name}</span>
                                <span > {p.numberOfExams} </span>
                            </Item>
                        );
                    })}
                </List>
            </Container>
    );
}