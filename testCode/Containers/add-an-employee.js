import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { fetchCompanyList } from '../actions/companyActions.js';
import { addAnEmployee } from '../actions/peopleActions.js';
// import AddEmployeeForm from '../Forms/addPersonForm.jsx';
import { Link } from 'react-router-dom';

connect((store) => {
  return {
    //store.name_in_combineReducers.data_property_needed
    addingEmployee: store.companyEmployeeList.adding,
    companies: store.companyList.companies,
    fetchedCompanies: store.companyList.fetched,
    fetchingCompanies: store.companyList.fetching,
  };
});

class AddAnEmployee extends Component {

  createEmployee() {

    const { companies } = this.props;
    console.log('@createEmployee@ companyList: ' + JSON.stringify(companies));

    const EmployeeToAdd = {
      'name': this.refs.name.value,
      'companyId': this.refs.companyId.value,
      'email': this.refs.email.value,
    };

    let company = companies.filter(company=>company.name === EmployeeToAdd.name);
    EmployeeToAdd.companyId = company._id;

    setTimeout(() => {
      console.log('inside setTimeout -> addAnEmployee');
      this.props.addAnEmployee(EmployeeToAdd);
    }, 100);
  }

  componentWillMount() {
    this.props.fetchCompanyList();
  }

  render() {
    const {fetchingCompany, companies} = this.props;

    console.log('companyList: ' + JSON.stringify(companies));
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Create New Employee</h3>
          </div>
          <div className="panel-body">
            <form className='newCompanyForm' id='addCompanyForm'>
              <div className='field'>
                <div>
                  <p><b>Name</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" ref='name' />
                </div>
                <div>
                  <p><b>Email</b></p>
                  <input className="col-sm-12 col-md-12" type="textbox" ref='email' />
                </div>
                <div>
                  <p><b>Company</b></p>
                  <select>
                    <option ref='companyId'>Xerox</option>
                    <option ref='companyId'>Kodak</option>
                    <option ref='companyId'>Google</option>
                    <option ref='companyId'>Amazon</option>
                    <option ref='companyId'>AMD</option>
                  </select>
                </div>

              </div>

              <div>
                <input onClick={() => {
                  this.createEmployee();
                // this.props.addACompany(CompanyToAdd);
              }} type="submit" value="Add Employee" />
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
    addingEmployee: state.companyEmployeeList.adding,
    companies: state.companyList.companies,
    fetchedCompanies: state.companyList.fetched,
    fetchingCompanies: state.companyList.fetching,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCompanyList,
  addAnEmployee
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(AddAnEmployee);