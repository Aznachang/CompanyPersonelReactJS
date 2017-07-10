import React, {Component} from 'react';
import axios from 'axios';
import AddCompanyForm from './Forms/addCompanyForm.jsx';
import AddPersonForm from './Forms/addPersonForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>SigFig</div>
        <div className="col-sm-7">This app is awesome!
          {this.props.children}
        </div>
        <div className="col-sm-5">
          <AddCompanyForm />
          <AddPersonForm />
        </div>
      </div>
    )
  }
}

export default App;
