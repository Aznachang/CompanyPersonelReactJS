import React, {Component} from "react";
import { connect } from "react-redux";

import { fetchCompanyList } from "../../actions/companyActions";
// import { fetchTweets } from "../actions/peopleActions";

@connect((store) => {
  return {
    companiesFetched: store.companies
  };
})
export default class Main extends Component {
  componentWillMount() {
    this.props.dispatch(fetchCompanyList())
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}
