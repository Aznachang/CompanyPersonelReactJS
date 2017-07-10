import React, {Component} from 'react';
import axios from 'axios';

export default class addPersonForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Create New Person</h3>
          </div>
          <div class="panel-body">
            <form className='newPersonForm' id="addPersonForm">
              <div class='field'>
                <b>Name</b>{'\n'}
                <input class="col-sm-12 col-md-12" type="textbox" /><br>
                {'\n'}<b>Email</b>{'\n'}
                <input class="col-sm-12 col-md-12" type="email" /><br>
                {'\n'}<b>Company </b>
                <select>
                  <option>Hello World</option>
                </select>{'\n'}{'\n'}
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