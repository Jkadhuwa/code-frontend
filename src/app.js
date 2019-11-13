import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/layouts/LandingPage";
import MainLogin from "./components/auth/MainLogin";
import CreateArticle from "./components/articles/CreateArticle";
import MainRegister from "./components/auth/MainRegister";
import NotFound from "./components/layouts/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" exact component={MainRegister} />
          <Route path="/signin" exact component={MainLogin} />
          <Route path="/create" exact component={CreateArticle} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
