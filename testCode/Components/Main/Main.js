import React from 'react';
import CompanyList from '../../Containers/company-list.js';
import { Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <CompanyList />
  </div>
);

// const App = () => (
//   <Router history={history}>
//     <Route path="/main" component={Layout}>
//       <Route path="/foo" component={Foo} />
//       <Route path="/bar" component={Bar} />
//     </Route>
//   </Router>
// );

export default App;
