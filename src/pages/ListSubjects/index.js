import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Container, H1, List, Item, Title} from '../ListProfessor/styles'
import { useHistory } from 'react-router';

export default function ListSubjects () {

    const history = useHistory();

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        // const promise = axios.get('http://localhost:3000/list-subjects'); 
        const promise = axios.get('https://repo-exams-api.herokuapp.com/list-subjects');
        promise.then( (res) => {
            setSubjects(res.data);
        }).catch(e => {
            alert('Erro ao obter as disciplinas')
            history.push('/');
        })
    }, []);

    return (
            <Container>
                <H1>LISTA DE DISCIPLINAS</H1>
                <List>
                    <Title>
                        <h3 className = "title"> Nome </h3>
                        <h3 className = "title"> Provas </h3>
                    </Title>
                    { subjects.map( s => {
                        return( 
                            <Item key = {s.id} onClick = {() => history.push(`/busca/disciplinas/${s.id}`)}>
                                <span > {s.name}</span>
                                <span > {s.numberOfExams} </span>
                            </Item>
                        );
                    })}
                </List>
            </Container>
    );
}