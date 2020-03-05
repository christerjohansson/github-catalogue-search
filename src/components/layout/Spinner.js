import React, { Fragment } from 'react';
import spinner from './831.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
