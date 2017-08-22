import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchACompany, fetchACompanyLocChange} from '../actions/companyActions.js';
import AddEmployeeForm from '../Forms/addPersonForm.jsx';
import { Link } from 'react-router-dom';

connect((store) => {
  return {
    //store.name_in_combineReducers.data_property_needed
    company: store.companyDetail.company,
    fetchingCompany: store.companyDetail.fetching
  };
});

class AddAnEmployee extends Component {

  componentWillMount() {
    // console.log(`companyID: ${JSON.stringify(this.props.company._id)}`);
    //console.log(`props: ${JSON.stringify(this.props)}`);
    // Fetch A Particular Company's Details
    this.props.fetchACompany(this.props.companyID);
  }

  render() {
    const {fetchingCompany, company} = this.props;
    //console.log(`ad-an-employee-props: ${JSON.stringify(this.props)}`);
    //console.log(`props: ${JSON.stringify(fetchCompany)}`);
    //console.log(this.props.companyID);

    return (
      <div>
        <AddEmployeeForm />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    companyID: state.companyDetail[ownProps.id],
    company: state.companyDetail.company,
    fetchingCompany: state.companyDetail.fetching
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchACompany, fetchACompanyLocChange
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(AddAnEmployee);