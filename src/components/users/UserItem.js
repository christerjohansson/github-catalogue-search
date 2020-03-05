import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
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
};

UserItem.propType = {
  user: PropTypes.object.isRequired
};

export default UserItem;