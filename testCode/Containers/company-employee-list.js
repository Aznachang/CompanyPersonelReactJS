import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/** ACTIONS **/
import {fetchACompany, fetchACompanyLocChange} from '../actions/companyActions.js';
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
    //const {companyID} = this.props;
    //console.log(`CCompanyEmpList-companyID: ${JSON.stringify(companyID)}`);
    return this.props.employees.map(employee => {
      return (
      <li key={employee._id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <Link to={`/testCode/companies/${this.props.empCompanyID}/edit`}
                onClick={() => {
                  console.log(`$$$ Header link to: ${this.props.empCompanyID}`);
                  this.props.fetchACompanyLocChange(this.props.empCompanyID);
              }}>
              Company Employees
              </Link>
            </h3>
          </div>
         <div className="panel-body">
           <ul>{employee.name}</ul>
         </div>
         <div className="panel-footer">
           <Link to ={`/testCode/companies/${this.props.empCompanyID}`}
             onClick={() => {
               console.log(`### Footer link to: ${this.props.empCompanyID}`);
               this.props.fetchACompanyLocChange(this.props.empCompanyID);
             }}>
             Go Back To Company Details
           </Link>
         </div>
        </div>
      </li>);
    });
  }

  componentWillMount() {
    //first 'fetchEmployees' to see if import company data is needed
    this.props.fetchEmployees(this.props.empCompanyID);

    //setTimeout for fetchEmployees to complete
    setTimeout(() => {
      const {fetchingEmployees, employees} = this.props;
      if (!fetchingEmployees && employees.length === 0) {
        this.props.importEmployees(this.props.empCompanyID);
      }
    },50);
  }

  render() {
    const {
      employees, // [{emp1}, {emp2}]
      fetchedEmployees,
      fetchingEmployees,
      companyID,
      empCompanyID
    } = this.props;

    if (fetchingEmployees && employees.length === 0) {
      return (<div></div>);
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
    empCompanyID: state.companyEmployeeList.empCompanyId,
    company: state.companyDetail.company,
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