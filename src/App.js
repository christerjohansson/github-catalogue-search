import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from './context/github/GithubState';
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  /*This API call requires API-keys to be stored in your .env.local file.
   Generate your own at https://github.com/settings/applications/new/ */

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=$
  //     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

   

  // Give warning when user enter no data in search field.
  const displayAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 1500);
  };

  return (
    <GithubState>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    setAlert={displayAlert}
                  />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
    </GithubState>
  );
};

export default App;
