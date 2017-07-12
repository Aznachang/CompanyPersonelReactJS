import React, {Component} from 'react';
import axios from 'axios';

export default class addPersonForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Create New Person</h3>
          </div>
          <div className="panel-body">
            <form className='newCompanyForm' id='addCompanyForm'>

              <div className='field'>
                <div>
                  <p><b>Name</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" required />
                </div>
                <div>
                  <p><b>Email</b></p>
                  <input className="col-sm-12 col-md-12" required type="textbox" />
                </div>
                <div>
                  <p><b>Company </b></p>
                  <select>
                    <option>Ohayo</option>
                  </select>
                </div>

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