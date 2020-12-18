import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { useHistory, useParams } from 'react-router';
import { Container, H1} from '../ListProfessor/styles'
import {WrapperList, Title} from '../ProfessorPage/styles'
import List from '../../components/List'

export default function SubjectPage () {

    const history = useHistory();
    const {id} = useParams();
    const [subject, setSubject] = useState({});
    const [p1Exams, setp1Exams] = useState([]);
    const [p2Exams, setp2Exams] = useState([]);
    const [p3Exams, setp3Exams] = useState([]);
    const [pfExams, setpfExams] = useState([]);
    const [secondCallExams, setSecondCallExams] = useState([]);
    const [othersExams, setOthersExams] = useState([]);

    useEffect( () => {
        // const promise = axios.get(`http://localhost:3000/subject/${id}`);
        const promise = axios.get(`https://repo-exams-front.herokuapp.com/subject/${id}`);
        promise.then( (res) => {
            setSubject(res.data);
            separateCategoriesOfExams(res.data.exams)
        }).catch(e => {
            alert('Erro ao obter dados da disciplina')
            history.push('/busca/discipinas');
        })
    }, [])

    function separateCategoriesOfExams(exams) {
        setp1Exams( exams.filter(e => e.categorie === 'P1') );
        setp2Exams( exams.filter(e => e.categorie === 'P2') );
        setp3Exams( exams.filter(e => e.categorie === 'P3') );
        setpfExams( exams.filter(e => e.categorie === 'PF') );
        setSecondCallExams ( exams.filter(e => e.categorie === '2chamada') );
        setOthersExams( exams.filter(e => e.categorie === 'Outras') );
    }


    return (
        <Container>
            <H1>{subject.name}</H1>
            <WrapperList>
                <div>
                    <Title> P1 </Title>
                    <List items = {p1Exams} />
                </div>
                <div>
                    <Title> P2 </Title>
                    <List items = {p2Exams} />
                </div>
                <div>
                    <Title> P3 </Title>
                    <List items = {p3Exams} />
                </div>
                <div>
                    <Title> PF </Title>
                    <List items = {p1Exams} />
                </div>
                <div>
                    <Title> 2chamada </Title>
                    <List items = {secondCallExams} />
                </div>
                <div>
                    <Title> Outras </Title>
                    <List items = {othersExams} />
                </div>
            </WrapperList>
        </Container>
    );
}