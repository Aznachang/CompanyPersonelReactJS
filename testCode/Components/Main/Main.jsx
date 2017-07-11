import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCompanyList } from "../../actions/companyActions";
// import { fetchTweets } from "../actions/peopleActions";

// connect((store) => {
//   return {
//     companies: store.companies.companies
//   };
// });

class Main extends Component {
  // const { companies } = this.props;

  createCompanyListItems() {
    return this.props.companies.map(company => {
        return (
        <li key={company.id}>
          Name:
          {company.name}
          Address:
          {company.address}
          Revenue:
          {company.revenue}
          Phone:
          {company.phone}
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

export default connect(mapStateToProps)(Main);
