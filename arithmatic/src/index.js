import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from './components/Question/Questions';
import Result from './components/Result/Result';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Switch>
          <Route path='/' exact component={App}/>
          <Route path='/questions' exact component={Questions}/>
          <Route path='/result' exact component={Result}/>           
      </Switch>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


