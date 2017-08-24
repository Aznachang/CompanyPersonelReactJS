import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import AddCompanyForm from '../Forms/addCompanyForm.jsx';
import { addACompany } from '../actions/companyActions.js';
import { Link } from 'react-router-dom';

// BASED ON 'index.js' under 'reducers' folder
connect((store) => {
  return {
    //store.name_in_combineReducers.data_property_needed
    // company: store.companyDetail.company,
    // fetchingCompany: store.companyDetail.fetching,
    addingCompany: store.companyList.adding
  };
});

class AddACompany extends Component {

  createCompany() {
    const CompanyToAdd = {
      'name': this.refs.name.value,
      'address': this.refs.address.value,
      'revenue': this.refs.revenue.value,
      'phone': this.refs.phone.value,
    };
    this.props.addACompany(CompanyToAdd);
  }

  render() {
    // const {addingCompany} = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Create New Company</h3>
          </div>
          <div className="panel-body">
            <form className='newCompanyForm' id='addCompanyForm'>
              <div className='field'>
                <div>
                  <p><b>Name</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" ref='name' />
                </div>
                <div>
                  <p><b>Address</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" ref='address' />
                </div>
                <div>
                  <p><b>Revenue</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" ref='revenue' />
                </div>
                <div>
                  <p><b>Phone</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" ref='phone' />
                </div>
              </div>
              <div>
                <p><input  onClick={() => {
                  this.createCompany();
                // this.props.addACompany(CompanyToAdd);
              }} type="submit" value="Add Company" /></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    addingCompany: state.companyList.adding
    // companyID: state.companyDetail[ownProps.id],
    // company: state.companyDetail.company,
    // fetchingCompany: state.companyDetail.fetching
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addACompany
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(AddACompany);