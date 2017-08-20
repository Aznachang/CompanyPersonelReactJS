import React from 'react';
import CompanyList from '../../Containers/company-list.js';
import CompanyDetail from '../../Containers/company-detail.js';
import { Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <CompanyList />
  </div>
);

export default App;
