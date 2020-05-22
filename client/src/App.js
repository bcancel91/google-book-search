import React from "react";
import Search from "./pages/search";
import Saved from "./pages/saved";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
        <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Search Google Books</Link>
            </li>
            <li>
              <Link to="/Saved">Saved Books</Link>
            </li>
    
          </ul>
        </nav>

     
          <Switch>
            <Route path="/" exact>
          <Search />
            </Route>
            <Route path="/saved" exact>
              <Saved />
            </Route>
          </Switch>
          </div>
      </Router>
    </div>
  );
  
};

export default App;

