import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

/**** FORMS ****/
// import AddCompanyForm from './Forms/addCompanyForm.jsx';
// import AddPersonForm from './Forms/addPersonForm.jsx';

/**** Components ****/
import Main from './Components/Main/Main.js';
import CompanyDetail from './Components/CompanyDetail/CompanyDetail.js';
import AddEmployeeForm from './Components/AddAnEmployee.js';
import AddCompanyForm from './Components/AddACompany.js';
import ListOfEmployees from './Components/EmployeeList.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col-sm-7">
          <Switch>
          <Route exact path='/testCode' component={Main}/>
          <Route exact path='/testCode/companies/:companyId' component={CompanyDetail}/>
          <Route exact path='/testCode/companies/:companyId/people' component={ListOfEmployees}/>
          </Switch>
        </div>
        <div className="col-sm-4">
          <AddCompanyForm />
          <AddEmployeeForm />
        </div>
      </div>
    )
  }
}

export default App;
