import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {} from '../actions/';

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    //store.name_in_combineReducers.data_property_needed
    companies: store.companyList.companies,
    // fetchedCompanies: store.companyList.fetched,
    fetchingCompanies: store.companyList.fetching,
    importFufilled: store.importCompanyList.fetched
  };
});

class CompanyDetail extends Component {
  render() {
    if (this.props.companyFetching) {
      return (<h2>Fetching Company Details...</h2>);
    }
    return (
      <div>
        <img src={this.props.user.thumbnail} />
        <h2>{this.props.user.first} {this.props.user.last}</h2>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(CompanyDetail);