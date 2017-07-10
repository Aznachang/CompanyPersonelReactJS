import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import AddCompanyForm from './Forms/addCompanyForm.jsx';
import AddPersonForm from './Forms/addPersonForm.jsx';

render((
  <BrowserRouter component = {App}>
    <Route path="/" component={App}/>
  </BrowserRouter>
), document.getElementById('app'))
