import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/** ACTIONS **/
import {fetchACompanyLocChange} from '../actions/companyActions.js';
import {fetchEmployees, importEmployees} from '../actions/peopleActions.js';

import { Link } from 'react-router-dom';

connect((store) => {
  return {
    //store.name_in_combineReducers.data_property_needed
    employees: store.companyEmployeeList.employees,
    fetchedEmployees: store.companyEmployeeList.fetched,
    fetchingEmployees: store.companyEmployeeList.fetching,
  };
});

class CompanyEmployeeList extends Component {
  getEmployeeListItems() {
    return this.props.employees.map(employee => {
      return (
      <li key={employee._id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <Link to={`/testCode/companies/${this.props.companyID}/edit`}
                onClick={() => {
                  console.log(`Header link to: ${this.props.companyID}`);
                  this.props.fetchACompanyLocChange(this.props.companyID);
              }}>
              Company Employees
              </Link>
            </h3>
          </div>
         <div className="panel-body">
          <ul>{employee.name}</ul>
         </div>
         <div className="panel-footer">
           <Link to ={`/testCode/companies/${this.props.companyID}`}
             onClick={() => {
               console.log(`Footer link to: ${this.props.companyID}`);
               this.props.fetchACompanyLocChange(this.props.companyID);
             }}>
             Go Back To Company Details
           </Link>
         </div>
        </div>
      </li>);
    });
  }

  importEmployees() {
    setTimeout( ()=> {
      const {fetchingEmployees, employees} = this.props;
      if (!fetchingEmployees && employees.length === 0) {
        // always fetches after import
        this.props.importEmployees();
      }
    },100);
  }

  componentWillMount() {
    this.props.fetchEmployees(this.props.companyID);
    // import Employee Data - if empty
    this.importEmployees(this.props.companyID);
  }

  render() {
    const {
      employees, // [{emp1}, {emp2}]
      fetchedEmployees,
      fetchingEmployees,
      companyID
    } = this.props;

    if (fetchingEmployees && employees.length === 0) {
      return (<h2>Fetching Employees...</h2>);
    }

    if (fetchedEmployees) {
      if (employees.length === 0) {
        return (
          <h3>No Employees Found, Importing List of Employees!</h3>
        )
      }
    }
    return (
      <div>
        <ul>
          {this.getEmployeeListItems()}
        </ul>
      </div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state, ownProps) {
  return {
    companyID: state.companyList[ownProps.companyId],
    employees: state.companyEmployeeList.employees,
    fetchedEmployees: state.companyEmployeeList.fetched,
    fetchingEmployees: state.companyEmployeeList.fetching,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEmployees, fetchACompanyLocChange,
  importEmployees
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CompanyEmployeeList);