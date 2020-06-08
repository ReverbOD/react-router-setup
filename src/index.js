import React from 'react';
import { withRouter, BrowserRouter, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Here i've have modified the index.js to properly configure the BrowserRouter 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/routes-config"}> {/* change basename={""} with your name app setted in package.json on "homepage" string*/}
    	<Route path="/" component={withRouter(App)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();