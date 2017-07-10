import React from 'react';
import axios from 'axios';

export default class addCompanyForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Create New Company</h3>
          </div>
          <div className="panel-body">
            <form name='newCompanyForm' id='addCompanyForm'>
              <div className='field'>
              <b>Name</b>{'\n'}
              <input className="col-sm-12 col-md-12" type="textbox" ng-model="company.name" name="companyName" required />{'\n'}
              {'\n'}<b>Address</b>{'\n'}
              <input className="col-sm-12 col-md-12" required type="textbox" />{'\n'}
              {'\n'}<b>Revenue</b>{'\n'}
              <input className="col-sm-12 col-md-12" required type="textbox" />{'\n'}
              {'\n'}<b>Phone</b>{'\n'}
              <input className="col-sm-12 col-md-12" required type="textbox" />{'\n'}{'\n'}
              </div>
              <div>
              <input type="submit" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
