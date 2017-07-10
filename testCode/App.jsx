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
        {this.props.children}
        <AddCompanyForm />
        <AddPersonForm />
      </div>
    )
  }
}

export default App;
