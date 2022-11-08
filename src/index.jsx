import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import { Home } from './pages';
import { Error } from './pages';
import { Fiche } from './pages';
import { Footer } from './components';
import { Header } from './components';
import { About } from './components';

import 'typeface-montserrat';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Accueil/">
        </Route>

        <Route path="/Propos">
          <About />
        </Route>

        <Route exact path="/Appartement/:id" >
          <Fiche />
        </Route>

        <Route path="/erreur404">
          <Error />
        </Route >

      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,

)
