import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link}  from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({getUserRepos, repos, match}) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

const {
      id,
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      following,
      followers,
      login,
      html_url,
      public_repos,
      public_gists,
      hireable,
      created_at,
      updated_at
    } = user;

    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    if (loading) return <Spinner />

    return (
      <Fragment>
        <Link to='/' className='btn btn-dark'>Go back</Link>
        ID: {''} {id} | 
        {hireable ? <div className="badge badge-success">Hireable</div> : <div className="badge badge-danger">Not hireable</div>} | 
        Member since: {(new Date(created_at)).toLocaleDateString('en-US', DATE_OPTIONS)} | 
        Last seen: {(new Date(updated_at)).toLocaleDateString('en-US', DATE_OPTIONS)}

        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt={name} className="round-img" style={{width: '7.5em'}}/>
            <h1>{name}</h1>
            <p>location: {location}</p>
          </div>
          <div>
            {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer">Visit my profile</a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username: </strong> {login}
                  </Fragment>}
              </li>
              <li>
                {login && <Fragment>
                  <strong>Company: </strong> {company}
                  </Fragment>}
              </li>
              <li>
                {login && <Fragment>
                  <strong>Website: </strong> <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a>
                  </Fragment>}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-danger">Public repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
}

User.propTypes = {
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired
}

export default User;
