import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/MainComponent';
import HomePageContainer from './components/HomePageContainer';
import ResultPageContainer from './components/ResultPageContainer';
import store from './store';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <MainComponent />
          <Route exact path="/" component={ Home } />
          <Route path="/result"></Route>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)