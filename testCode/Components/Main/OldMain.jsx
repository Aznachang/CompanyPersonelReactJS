import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCompanyList } from "../../actions/companyActions";
// import { fetchTweets } from "../actions/peopleActions";

connect((store) => {
  return {
    companies: store.companies.companies
  };
});

class Main extends Component {
  // const { companies } = this.props;
  //<h3 class="panel-title">
  // <a href="#/company/${company._id}">{company.name}
  // </a>

  //<div class="panel-footer">
  // <a href=`#/companies/${company._id}/people`>People who work here</a>

  createCompanyListItems() {
   return this.props.companies.map(company => {
      return (
      <li key={company._id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {company.name}
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
          People who work here
         </div>
        </div>
      </li>);
    });
  }

  componentWillMount() {
    this.props.dispatch(fetchCompanyList());
  }

  render() {
    // const { companies } = this.props;
    console.log(`companies: ${this.props.companies}`);
    return (
      <div>
        <h1>Companies</h1>
        <ul>{this.createCompanyListItems()}</ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    companies: state.companies
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchCompanyList: fetchCompanyList}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
