import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState);

// Set the alert
// Give warning when user enter no data in search field.
const displayAlert = (msg, type) => {
    dispatch({
        type: SET_ALERT,
        payload: {msg, type}
    })
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 1500);
  };

    return <AlertContext.Provider
    value={{
        alert: state,
        displayAlert
        }}
    >
    {props.children}
    </AlertContext.Provider>
};

export default AlertState;