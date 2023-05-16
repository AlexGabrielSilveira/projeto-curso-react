import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home.jsx';
import Company from './components/Company.jsx';
import Contact from './components/Contanct.jsx';
import NewProject from './components/newProject/NewProject.jsx';
import Projects from './components/project/Projects.jsx';

import Container from './layout/container/Container.jsx';
import Navbar from './layout/navbar/Navbar.jsx';
import Footer from './layout/footer/Footer.jsx'
import EditProject from './components/edit/Project';


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
          <Route path='/project/:id'>
            <EditProject />
          </Route>
        </Switch>
        </Container>
        <Footer />
     </Router>
  );
}

export default App;
