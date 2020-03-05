import React, { Component } from 'react';

class Useritems extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='Avatar'
          className='round-img'
          style={{ width: '3.75em' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default Useritems;
