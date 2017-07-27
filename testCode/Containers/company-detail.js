import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchACompany} from '../actions/companyActions.js';
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
    const {company} = this.props;
    console.log(`Company Detailed INFO: ${JSON.stringify(company)}`);
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
  }

  componentWillMount() {
    // console.log(`companyID: ${JSON.stringify(this.props.companyID)}`);
    console.log(`props: ${JSON.stringify(this.props)}`);
    // Fetch A Particular Company's Details
    this.props.dispatch(fetchACompany());
  }

  render() {
    const {fetchingCompany, company} = this.props;
    // console.log(`props: ${JSON.stringify(this.props)}`);

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
    //companyId: state.companyDetail[props.params._id],
    // companyID: state.companyDetail[this.props.route._id],
    companyID: state.companyList[ownProps.match.params._id],
    company: state.companyDetail.company,
    fetchingCompany: state.companyDetail.fetching
  };
}

export default connect(mapStateToProps)(CompanyDetail);