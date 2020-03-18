import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search =({searchUsers, showClear, clearUsers, setAlert })=> {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something to search', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={text}
            placeholder='Search our catalogue...'
            onChange={onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn-light btn-block' onClick={clearUsers}>
            Reset
          </button>
        )}
      </div>
    );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
