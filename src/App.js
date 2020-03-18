import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import GithubState from './context/github/GithubState';
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
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

  // Searching users in the catalogue by
  // asking API through props and component
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Locate a single user on Github
  const getUser = async login => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  // List users repos
  const getUserRepos = async login => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Reset form and clear state from data
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

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
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={displayAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
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
