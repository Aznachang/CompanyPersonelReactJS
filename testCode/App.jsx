import React from 'react';
import ManageComponent from './ManageComponent.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}