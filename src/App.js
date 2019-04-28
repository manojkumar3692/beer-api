import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import MainComponent from './component/MainComponent/MainComponent';
import ErrorComponent from './component/Error/Error';
import HeaderComponent from './common/header/Header';
import Favorite from './component/Favorite/Favorite';
function App() {
  return (
    <Router>
      <HeaderComponent/>
      <div>
      <Switch>
      <Route path="/" component={MainComponent} exact />
      <Route path="/Favorite" component={Favorite} />
      <Route component={ErrorComponent} exact />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
