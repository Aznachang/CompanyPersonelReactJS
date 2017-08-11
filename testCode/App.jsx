import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

/**** FORMS ****/
import AddCompanyForm from './Forms/addCompanyForm.jsx';
import AddPersonForm from './Forms/addPersonForm.jsx';

/**** Components ****/
import Main from './Components/Main/Main.js';
import CompanyDetail from './Components/CompanyDetail/CompanyDetail.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col-sm-7">
          <Route exact path='/testCode' component={Main}/>
          <Route exact path='/testCode/companies' component={Main}/>
          <Route exact path='/testCode/companies/:id' component={CompanyDetail}/>
        </div>
        <div className="col-sm-4">
          <AddCompanyForm />
          <AddPersonForm />
        </div>
      </div>
    )
  }
}

export default App;
