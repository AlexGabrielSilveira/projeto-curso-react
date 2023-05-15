import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Company from './components/Company';
import Contact from './components/Contanct';
import NewProject from './components/newProject/NewProject';
import Projects from './components/project/Projects';

import Container from './layout/container/Container';
import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer'


function App() {

  return (
     <Router>
      {/* Navbar component */}
        <Navbar />
      {/* ROTAS */}
      <Container customClass='min-height'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/company'>
            <Company />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/newProject'>
            <NewProject />
          </Route>
        </Switch>
        </Container>
        <Footer />
     </Router>
  );
}

export default App;
