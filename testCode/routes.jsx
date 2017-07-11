import * as React from 'react';
import AddCompanyForm from './Forms/addCompanyForm.jsx';
import AddPersonForm from './Forms/addPersonForm.jsx';
import App from './App.jsx';
import { Route } from 'react-router';

export default (
  <Route path="/">
    <Route path="/" component={App} />
  </Route>
);