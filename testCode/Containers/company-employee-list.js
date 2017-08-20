import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchEmployees, fetchACompanyLocChange} from '../actions/companyActions.js';
import { Link } from 'react-router-dom';

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    //store.name_in_combineReducers.data_property_needed
    employees: store.companyEmployeeList.companies,
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
              <Link to={`/testCode/companies/company/${this.props.companyID}/edit`} onClick={() => {
                console.log(`link to: ${this.props.companyID}`);
                this.props.fetchACompanyLocChange(this.props.companyID);
              }}>Company Employees
              </Link>
            </h3>
          </div>
         <div className="panel-body">
          <ul>{employee.name}</ul>
         </div>
         <div className="panel-footer">
           <Link to ={`/testCode/companies/${employee._id}/people`}>Go Back To Company Details</Link>
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
    // see if CompanyList Database is not empty
    // this.props.dispatch(fetchCompanyList());
    this.props.fetchEmployees();

    // import Data - if empty
    this.importEmployees();
  }

  render() {
    const {
      employees, // [{emp1}, {emp2}]
      fetchedEmployees,
      fetchingEmployees
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
function mapStateToProps(state) {
  return {
    companyID: state.companyEmployeeList[ownProps.id],
    employees: state.companyEmployeeList.companies,
    fetchedEmployees: state.companyEmployeeList.fetched,
    fetchingEmployees: state.companyEmployeeList.fetching,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEmployees, fetchACompanyLocChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CompanyEmployeeList);