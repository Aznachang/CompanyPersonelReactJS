import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCompanyList} from '../actions/companyActions.js'

// connect(
//   // this provides the dispatch function
//   (state) => {return {
//     companies: state.companies
//   }},
//   dispatch => bindActionCreators({fetchCompanyList}, dispatch),
// )

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    companies: store.companyList.companies
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
    const { companies } = this.props;
    console.log(`companies: ${JSON.stringify(companies)}`);    // console.log(`props: ${JSON.stringify(this.props)}`);
    if (!companies.length) {
      return (
        <div>
          Fetching List of Companies...
        </div>
      );
    }
    return (
      <div>
        <ul>
          {this.createCompanyListItems()}
        </ul>
      </div>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render


function mapStateToProps(state) {
  return {
    companies: state.companyList.companies
  };
}


// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch){
//   return bindActionCreators({fetchCompanyList: fetchCompanyList}, dispatch);
// }

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(CompanyList);