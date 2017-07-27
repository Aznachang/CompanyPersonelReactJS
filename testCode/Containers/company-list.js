import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCompanyList, importCompanies} from '../actions/companyActions.js';
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
              <Link to={`/companies/${company._id}`}>{company.name}
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
           <Link to ={`/companies/${company._id}/people`}>People who work here</Link>
         </div>
        </div>
      </li>);
    });
  }

  importCompanyData() {
    setTimeout( ()=> {
      const {fetchingCompanies, companies} = this.props;
      if (!fetchingCompanies && companies.length === 0) {
        // always fetches after import
        this.props.dispatch(importCompanies());
      }
    },100);
  }

  componentWillMount() {
    // see if CompanyList Database is not empty
    this.props.dispatch(fetchCompanyList());

    // import Data - if empty
    this.importCompanyData();
  }

  render() {
    const {
      companies,
      fetchedCompanies,
      fetchingCompanies
      } = this.props;

    console.log(`props: ${JSON.stringify(this.props)}`);
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
function mapStateToProps(state) {
  return {
    companies: state.companyList.companies,
    // data: this.props.match.params,
    fetchedCompanies: state.companyList.fetched,
    fetchingCompanies: state.companyList.fetching
  };
}

// return the smart Container - CompanyList
//      > CompanyList is now aware of state and actions
export default connect(mapStateToProps)(CompanyList);