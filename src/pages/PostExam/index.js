import React, {useState} from 'react'
import styled from 'styled-components';

import {Form} from './styles'
import {sendExamToServer} from './functions'

import {MainContainer} from '../../components/MainContainer'
import Option from '../../components/Option'

export default function PostExam () {

    const subjects = ["Matematica", "Biologia", "Quimica", "Geografia", "Fisica"];
    const professors = ["Ze", "Rogerio", "Geraldo", "Andre", "Marcão"];
    const categories = ["P1","P2","P3","PF","2chamada","Outras"]

    const [name, setName] = useState('');
    const [categorie, setCategorie] = useState('');
    const [subject, setSubject] = useState('');
    const [professor, setProfessor] = useState('');
    const [linkPDF, setLinkPDF] = useState('');

    return (
        <MainContainer >
            <Form onSubmit = {(e) => sendExamToServer(e, name, categorie, subject, professor, linkPDF)}>
                <input 
                    placeholder = "Nome - Ano.semestre - 2020.1" 
                    onChange = {(e) => setName(e.target.value)} 
                    value = {name} 
                    type = "text"
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
                />
                <button type = "submit"> Send exam </button>
            </Form>
        </MainContainer> 
    );
}
