import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link}  from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired
  }

  render() {
    const {
      id,
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      public_repos,
      public_gists,
      hireable,
      created_at
    } = this.props.user;

    const { loading } = this.props;
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    if (loading) return <Spinner />

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>Go back</Link>
        ID: {''} {id} | 
        Hireable: {''}
        {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />} | 
        Member since: {(new Date(created_at)).toLocaleDateString('en-US', DATE_OPTIONS)}

        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt={name} className="round-img" style={{width: '5em'}}/>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default User;
