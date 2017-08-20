import * as React from 'react';
// import AddCompanyForm from './Forms/addCompanyForm.jsx';
// import AddPersonForm from './Forms/addPersonForm.jsx';
import App from './App.jsx';
import Main from './Components/Main/Main.js';
import CompanyDetail from './Components/CompanyDetail/CompanyDetail.js';
import { Route } from 'react-router';
import { Route, Redirect, Router, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';

export default (
  <Router history ={createHashHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/companies/:id" component={CompanyDetail} />
    </Switch>
  </Router>
);