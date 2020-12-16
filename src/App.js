import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './pages/Home/index';
import SearchExams from './pages/SearchExams/index';

export default function App () {

    return (
        <>        
            <Router>
            <Switch>   
                  <Route path='/' exact >
                        <Home />
                  </Route>
                  <Route path='/searching' exact >
                        <SearchExams />
                  </Route>
              </Switch>
            </Router>
          </>
    );
}