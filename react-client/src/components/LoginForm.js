import React, { PropTypes } from 'react';
import './LoginForm.css';

const LoginForm = ( { isLoggedIn, onLoginClick, onLogOutClick }) => (
  (!isLoggedIn ?
    <div className='login-form'>
      <div className='login-form-row'>
        <label>Username</label>
        <input type='text' placeholder='Username' />
      </div>
      <div className='login-form-row'>
        <label>Password</label>
        <input type='password' placeholder='Password' />
      </div>
      <div className='login-form-row'>
        <button type='button' onClick={onLoginClick}>Log In</button>
      </div>
    </div>
  :
    <div className='login-form'>
      <div className='login-form-row'>
        User is already logged in
      </div>
      <div className='login-form-row'>
        <button type='button' onClick={onLogOutClick}>Log Out</button>
      </div>
    </div>
  )
);

LoginForm.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default LoginForm;