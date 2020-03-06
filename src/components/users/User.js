import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
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
      hireable
    } = this.props.user;

    const { loading } = this.props;
    return (
      <div>
        <h1>USER PAGE</h1>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    );
  }
}

export default User;