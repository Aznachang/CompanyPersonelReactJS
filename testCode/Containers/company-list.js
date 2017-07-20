import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCompanyList, importCompanies} from '../actions/companyActions.js'

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    //store.name_in_combineReducers.data_property_needed
    companies: store.companyList.companies,
    fetchedCompanies: store.companyList.fetched,
    importFufilled: store.importCompanyList.fetched
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
              <a href="#/company/{{company._id}}">{company.name}
              </a>
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
           <a href="#/companies/{{company._id}}/people">People who work here</a>
         </div>
        </div>
      </li>);
    });
  }

  getCompanyListAgain() {
    setTimeout(()=> this.props.dispatch(fetchCompanyList()),1500);
  }

  importCompanyData() {
    setTimeout( ()=> {
      if (this.props.fetchedCompanies && this.props.companies.length === 0) {
        this.props.dispatch(importCompanies());
      }
    },1000);
  }

  componentWillMount() {
    // see if CompanyList Database is not empty
    this.props.dispatch(fetchCompanyList());

    // import Data - if empty
    this.importCompanyData();
    // re-fetch CompanyList after 'import'
    this.getCompanyListAgain();
  }

  render() {
    const {
      companies,
      fetchedCompanies
      } = this.props;

    // console.log(`props: ${JSON.stringify(this.props)}`);
    if (companies.length !== 0) {
      return (
        <div>
          <ul>
            {this.createCompanyListItems()}
          </ul>
        </div>
      );
    }

    return (<h2>Fetching Data...</h2>);
  };
}; // end of company-list Container

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    companies: state.companyList.companies,
    fetchedCompanies: state.companyList.fetched
  };
}

// return the smart Container - CompanyList
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(CompanyList);