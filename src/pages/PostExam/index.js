import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

import {Form} from './styles'

import {MainContainer} from '../../components/MainContainer'
import Option from '../../components/Option'


export default function PostExam () {

    const subjects = ["Matematica", "Biologia", "Quimica", "Geografia", "Fisica"];
    const professors = ["Zé","Luis","Rogerio", "Eduardo", "Geraldo","Keila", "Andre"];
    const categories = ["P1","P2","P3","PF","2chamada","Outras"]

    const history = useHistory();

    const [isPosting, setIsPosting]  = useState(false);
    const [name, setName] = useState('');
    const [categorie, setCategorie] = useState('P1');
    const [subject, setSubject] = useState('Matematica');
    const [professor, setProfessor] = useState('Zé');
    const [linkPDF, setLinkPDF] = useState('');

    function onSubmit(e) {

        e.preventDefault();
        setIsPosting(true);
        sendExamToServer();
    }

    function sendExamToServer() {

        const body = {name, categorie, subject, professor, "link": linkPDF };

        const promise = axios.post('http://localhost:3000/new-exam', body); 
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
                    placeholder = "Nome - Ano.semestre - 2020.1" 
                    onChange = {(e) => setName(e.target.value)} 
                    value = {name} 
                    type = "text"
                    required
                />
                <select name="categorie" id="categorie" value = {categorie} onChange = {(e) => setCategorie(e.target.value)}>
                    {categories.map((item, i) => <Option text = {item} key = {i}  />)}
                </select>
                <select name="subject" id="subject" value = {subject} onChange = {(e) => setSubject(e.target.value)}>
                    {subjects.map((item, i) => <Option text = {item} key = {i}/>)}
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
