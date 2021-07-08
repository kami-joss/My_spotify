import './App.css';
import { useEffect, useState } from 'react';
import Albums from './composants/Album/Albums';
import Artistes from './composants/Artiste/Artistes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from './composants/Album/Album';
import Accueil from './composants/Accueil';
import CoverAlbum from "./composants/Album/CoverAlbum";
import CoverArtiste from './composants/Artiste/CoverArtiste';
import Artiste from './composants/Artiste/Artiste';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul className="menu"> 
          <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/artistes">Artistes</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/albums">
            <Albums data="hello"/>
          </Route>
          <Route path="/artistes">
            <Artistes />
          </Route>
          <Route path="/artiste">
            <Artiste />
          </Route>
          <Route path="/album/:id">
            <Album/>
          </Route>
          <Route path="/genres">
            
          </Route>
          <Route path="/">
            <Accueil/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );

}

export default App;
