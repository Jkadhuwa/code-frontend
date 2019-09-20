import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/layouts/LandingPage';
import Footer from './components/layouts/Footer';
import MainLogin from './components/auth/MainLogin';
import MainRegister from './components/auth/MainRegister';
import NotFound from './components/layouts/NotFound';
import {Provider} from 'react-redux';
import store from './redux/store'






const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route path="/signup" exact component={MainRegister} />
          <Route path="/signin" exact component={MainLogin} />
          <Route exact path="/" component={LandingPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
    </Provider>
  );
};
export default App;
