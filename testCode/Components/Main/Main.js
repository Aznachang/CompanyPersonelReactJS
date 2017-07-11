import React from 'react';
import CompanyList from '../../Containers/company-list.js';

const App = () => (
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h2 class="panel-title">Companies
        </h2>
      </div>
      <div class="panel-body">
        <CompanyList />
      </div>
    </div>
  </div>
);

export default App;
