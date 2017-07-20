import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchACompany} from '../actions/companyActions.js';

connect((store) => {
  console.log(`store is: ${store}`);
  return {
    //store.name_in_combineReducers.data_property_needed
    company: store.companyDetail.company,
    fetchingCompany: store.companyDetail.fetching
  };
});

class CompanyDetail extends Component {

  showCompanyDetails() {
    const {company} = this.props;
    console.log(`Company Detailed INFO: ${JSON.stringify(company)}`);
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
  }

  componentWillMount() {
    // Fetch A Particular Company's Details
    this.props.dispatch(fetchACompany());
  }

  render() {
    const {fetchingCompany, company} = this.props;
    console.log(`props: ${JSON.stringify(this.props)}`);

    if (!fetchingCompany && company._id === null) {
      return (<h2>Fetching Company Details...</h2>);
    }
    return (
      <div>
        <ul>
          {this.showCompanyDetails()}
        </ul>
      </div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    company: state.companyDetail.company,
    fetchingCompany: state.companyDetail.fetching
  };
}

export default connect(mapStateToProps)(CompanyDetail);