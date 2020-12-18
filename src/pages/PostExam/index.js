import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

import {Form} from './styles'

import {MainContainer} from '../../components/MainContainer'
import Option from '../../components/Option'


export default function PostExam () {

    const history = useHistory();

    const [subjects, setSubjects] = useState([]);
    const [professors, setProfessors] = useState([]);
    const categories = ["P1","P2","P3","PF","2chamada","Outras"]

    const [isPosting, setIsPosting]  = useState(false);
    const [name, setName] = useState('');
    const [categorie, setCategorie] = useState('P1');
    const [subject, setSubject] = useState('');
    const [professor, setProfessor] = useState('');
    const [linkPDF, setLinkPDF] = useState('');

    useEffect(() => {
        // const promise = axios.get('http://localhost:3000/list-subjects');
        const promise = axios.get('https://repo-exams-api.herokuapp.com/list-subjects');
        promise.then( (res) => {
            setSubjects(res.data);
            setSubject(res.data[0].name);
        }).catch(e => {
            alert('Erro ao obter os nomes das disciplinas!')
            history.push('/');
        })
    },[]);

    useEffect(() => {

        const chosenSubject = subjects.find( s => s.name === subject);
        if (chosenSubject) {
            // const promise = axios.get(`http://localhost:3000/professors/${chosenSubject.id}`);
            const promise = axios.get(`https://repo-exams-api.herokuapp.com/professors/${chosenSubject.id}`);
            promise.then( (res) => {
                setProfessors(res.data);
                setProfessor(res.data[0]);
            }).catch(e => {
                alert('Erro ao obter os nomes dos professores!');
                history.push('/');
            })
         } 
    },[subject]);

    function onSubmit(e) {

        e.preventDefault();
        setIsPosting(true);
        sendExamToServer();
    }

    function sendExamToServer() {

        const body = {name, categorie, subject, professor, "link": linkPDF };

        // const promise = axios.post('http://localhost:3000/new-exam', body); 
        const promise = axios.post('https://repo-exams-api.herokuapp.com/new-exam', body);
        promise.then( (res) => {
            setIsPosting(false);
            console.log(res.data);
            alert('Prova registrada com sucesso!');
            history.push('/');
        }).catch(e => {
            setIsPosting(false);
            console.log(e.response.status);
            alert('Erro ao cadastrar sua prova!')
            history.push('/');
        })
    }

    return (
        <MainContainer >
            <Form onSubmit = {onSubmit}>
                <input 
                    placeholder = "Nome - Ano.semestre - EX: 2020.1" 
                    onChange = {(e) => setName(e.target.value)} 
                    value = {name} 
                    type = "text"
                    required
                />
                <select name="categorie" id="categorie" value = {categorie} onChange = {(e) => setCategorie(e.target.value)}>
                    {categories.map((item, i) => <Option text = {item} key = {i}  />)}
                </select>
                <select name="subject" id="subject" value = {subject} onChange = {(e) => setSubject(e.target.value)}>
                    {subjects.map((item, i) => <Option text = {item.name} key = {item.id}/>)}
                </select>
                <select name="professor" id="professor" value = {professor} onChange = {(e) => setProfessor(e.target.value)}>
                    {professors.map((item, i) => <Option text = {item} key = {i}/>)}  
                </select>
                <input 
                    placeholder = "Link do PDF" 
                    onChange = {(e) => setLinkPDF(e.target.value)} 
                    value = {linkPDF} 
                    type = "text"
                    required
                />
                <button type = "submit"> {isPosting ? "Sending exam" : "Send exam"} </button>
            </Form>
        </MainContainer> 
    );
}
