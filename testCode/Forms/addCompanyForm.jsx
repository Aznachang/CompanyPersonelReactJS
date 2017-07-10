import React, {Component} from 'react';
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
            <form className='newCompanyForm' id='addCompanyForm'>
              <div className='field'>
                <div>
                  <p><b>Name</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox"required />
                </div>
                <div>
                  <p><b>Address</b></p>
                  <input className="col-sm-12 col-md-12" required type="textbox" />
                </div>
                <div>
                  <p><b>Revenue</b></p>
                  <input className="col-sm-12 col-md-12" required type="textbox" />
                </div>
                <div>
                  <p><b>Phone</b></p>
                  <input className="col-sm-12 col-md-12" required type="textbox" />
                </div>
              </div>
              <div>
                <p><input type="submit" value="Save" /></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
