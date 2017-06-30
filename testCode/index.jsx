import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './component/App.jsx';

render((
    <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={App} />
        </Route>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'))

