import React, {Component} from 'react';
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

  // <div className="col-sm-7">
  //   <Main />
  // </div>

  render() {
    return (
      <div>
        <div className="col-sm-7">
          <CompanyDetail />
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
