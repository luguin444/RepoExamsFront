import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './pages/Home/index';
import SearchExams from './pages/SearchExams/index';
import PostExam from './pages/PostExam/index';
import ListProfessor from './pages/ListProfessor/index';
import ProfessorPage from './pages/ProfessorPage/index';
import ListSubjects from './pages/ListSubjects/index';
import SubjectPage from './pages/SubjectPage/index';


export default function App () {

    return (
        <>        
            <Router>
            <Switch>   
                  <Route path='/' exact >
                        <Home />
                  </Route>
                  <Route path='/busca' exact >
                        <SearchExams />
                  </Route>
                  <Route path='/busca/professores' exact >
                        <ListProfessor />
                  </Route>
                  <Route path='/busca/professores/:id' exact >
                        <ProfessorPage />
                  </Route>
                  <Route path='/busca/disciplinas' exact >
                        <ListSubjects />
                  </Route>
                  <Route path='/busca/disciplinas/:id' exact >
                        <SubjectPage />
                  </Route>
                  
                  <Route path='/postar' exact >
                        <PostExam />
                  </Route>
              </Switch>
            </Router>
          </>
    );
}