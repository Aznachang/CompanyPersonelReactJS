import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCompanyList, importCompanies} from '../actions/companyActions.js'

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    //store.name_in_combineReducers.data_property_needed
    companies: store.companyList.companies,
    fetchingCompanies: store.companyList.fetching,
    fetchedCompanies: store.companyList.fetched,
    importedCompanies: store.importCompanyList.importedCompanies,
    importingCompanies: store.importCompanyList.fetching,
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

  componentWillMount() {
    this.props.dispatch(fetchCompanyList());
  }

  render() {
    const { companies, fetchingCompanies, fetchedCompanies, importedCompanies,
      importingCompanies,
      importFulfilled } = this.props;
    //console.log(`companies: ${JSON.stringify(companies)}`);
    // if (!companies.length) {
    //   return (
    //     <div>
    //       Fetching List of Companies...
    //     </div>
    //   );
    // }

    // FETCH COMPANIES
    return (
      <div>
        <ul>
          {this.createCompanyListItems()}
        </ul>
      </div>
    );

    //console.log(`props: ${JSON.stringify(this.props)}`);
    console.log(`fetchingCompanies: ${fetchingCompanies}`);
    console.log(`fetchedCompanies: ${fetchedCompanies}`);
    console.log(`companies length: ${companies.length}`);
    if (!fetchingCompanies && fetchedCompanies && companies.length === 0) {
      console.log('Running import companies!!!')
     this.props.dispatch(importCompanies());
     // if (!importingCompanies && importFufilled) {
     //    console.log(`importiFulfilled!!!!`);
     //  });
       //this.props.dispatch(fetchCompanyList());
    }
  }

}; // end of company-list Container

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    companies: state.companyList.companies,
    importedCompanies: state.importCompanyList.importedCompanies,
    fetchedCompanies: state.companyList.fetched,
    fetchingCompanies: state.companyList.fetching,
    importingCompanies:state.importCompanyList.fetching,
    importFufilled: state.importCompanyList.fetched
  };
}

// return the smart Container - CompanyList
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(CompanyList);