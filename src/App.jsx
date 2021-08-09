import React from 'react'
import Navbar from './Web/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Beranda from './Web/Beranda';
import Barang from './Web/Barang';
import Contact from './Web/Contact';
import Create from './Web/Create';
import Update from './Web/Update';

export default function App() {
  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path="/beranda">
          <Beranda/>
          </Route>
          <Route path="/barang">
          <Barang/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/update">
          <Update/>
          </Route>

          <Route path="/create">
          <Create/>
          </Route>

      </Switch>
    </Router>
  )
}
