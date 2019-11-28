import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


const App = () =>{
    return(
      <BrowserRouter>
      <div className = "App">
        <Header />
        <Nav />
          <div className = "App-wrapper-main"> 
            <Route path ='/Dialogs' component ={Dialogs} />
            <Route path = '/Main' component ={Main} />
          </div>
      </div>
      </BrowserRouter> );

}


export default App;