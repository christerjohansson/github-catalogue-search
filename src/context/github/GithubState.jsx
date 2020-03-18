import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GitubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GitubReducer, initialState);

// Searching users in the catalogue by
// asking API through props and component
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
    });
  };


// Get User

// Get Repos

// Clears Users


// Set Loading
const setLoading= () => dispatch({type: SET_LOADING});

    return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
    }}
    >
    
    {props.children}
    </GithubContext.Provider>
};

export default GithubState;