import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/** ACTIONS **/
import {fetchCompanyList, importCompanies, fetchACompanyLocChange} from '../actions/companyActions.js';
import {fetchEmployeesLocChange} from '../actions/peopleActions.js';

// Fix - Uncaught ReferenceError: Link is not defined React
  import { Link } from 'react-router-dom';

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    //store.name_in_combineReducers.data_property_needed
    companies: store.companyList.companies,
    fetchedCompanies: store.companyList.fetched,
    fetchingCompanies: store.companyList.fetching,
  };
});

class CompanyList extends Component {

  createCompanyListItems() {
    return this.props.companies.map(company => {
      return (
      <li key={company._id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <Link to={`/testCode/companies/${company._id}`}    onClick={() => {
                console.log(`***link to: ${company._id}`);
                this.props.fetchACompanyLocChange(company._id);
              }}>{company.name}
              </Link>
            </h3>
          </div>
         <div className="panel-body">
           <p><b>Address</b></p>
           <p>{company.address}</p>
           <p><b>Revenue</b></p>
           <p>{company.revenue}</p>
           <p><b>Phone</b></p>
           <p>{company.phone}</p>
         </div>
         <div className="panel-footer">
           <Link to ={`/testCode/companies/${company._id}/people`}
                 onClick={() => {
                console.log(`####link to: ${company._id}`);
                this.props.fetchEmployeesLocChange(company._id);
              }}>People who work here</Link>
         </div>
        </div>
      </li>);
    });
  }

  importCompanyData() {
    const {fetchingCompanies, companies} = this.props;
    setTimeout( ()=> {

      if (!fetchingCompanies && companies.length === 0) {
        // inside importCompanies action, always fetches again after import
        // this.props.dispatch(importCompanies());
        this.props.importCompanies();
      }
    },50);
  }

  componentWillMount() {
    // see if CompanyList Database is not empty
    // this.props.dispatch(fetchCompanyList());
    setTimeout( ()=> {
    this.props.fetchCompanyList();

    // import Data - if empty
    this.importCompanyData()},50);
  }

  render() {
    const {
      companies,
      fetchedCompanies,
      fetchingCompanies
      } = this.props;

    // console.log(`props: ${JSON.stringify(this.props)}`);
    // console.log(`params: ${data}`);
    // if (companies.length !== 0 && !fetchingCompanies)
    if(fetchingCompanies && companies.length === 0) {
      return (<h2>Fetching Data...</h2>);
    }
    if (fetchedCompanies) {
      if (companies.length === 0) {
        return (
          <h3>No Companies Found, Importing List of Companies!</h3>
        )
      }
    }
    return (
      <div>
        <ul>
          {this.createCompanyListItems()}
        </ul>
      </div>
    );
  };
}; // end of company-list Container

// Get apps state and pass it as props to CompanyList
//      > whenever state changes, the CompanyList will automatically re-render
function mapStateToProps(state, ownProps) {
  //console.log(`%%%%%%ownProps: ${JSON.stringify(ownProps)}`);
  return {
    companies: state.companyList.companies,
    fetchedCompanies: state.companyList.fetched,
    fetchingCompanies: state.companyList.fetching
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCompanyList, importCompanies,
  fetchACompanyLocChange,fetchEmployeesLocChange
}, dispatch)


// return the smart Container - CompanyList
//      > CompanyList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);