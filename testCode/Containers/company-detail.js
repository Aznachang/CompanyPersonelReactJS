import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/** ACTIONS **/
import {fetchACompany, fetchACompanyLocChange
} from '../actions/companyActions.js';
import {fetchEmployeesLocChange} from '../actions/peopleActions.js';

import { Link } from 'react-router-dom';

connect((store) => {
  return {
    //store.name_in_combineReducers.data_property_needed
    company: store.companyDetail.company,
    fetchingCompany: store.companyDetail.fetching
  };
});

class CompanyDetail extends Component {

  showCompanyDetails() {
    const {company, companyID} = this.props;
    console.log(`Company Detailed INFO: ${JSON.stringify(company)}`);
    return (
    <li key= {companyID}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
           <Link to={`/testCode/companies/${company._id}/edit`}>
             {company.name}
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
                console.log(`link to: ${company._id}`);
                this.props.fetchEmployeesLocChange(company._id);
              }}>
          People who work here
        </Link>
       </div>
      </div>
    </li>);
  }

  componentWillMount() {
    // console.log(`companyID: ${JSON.stringify(this.props.company._id)}`);
    console.log(`props: ${JSON.stringify(this.props)}`);
    // Fetch A Particular Company's Details
    this.props.fetchACompany(this.props.companyID);
  }

  render() {
    const {fetchingCompany, company} = this.props;
    console.log(`props: ${JSON.stringify(this.props)}`);
    //console.log(`props: ${JSON.stringify(fetchCompany)}`);
    // console.log(this.props.companyID);

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

function mapStateToProps(state, ownProps) {
  return {
    companyID: state.companyDetail[ownProps.companyId],
    company: state.companyDetail.company,
    fetchingCompany: state.companyDetail.fetching
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchACompany, fetchACompanyLocChange,
  fetchEmployeesLocChange
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);