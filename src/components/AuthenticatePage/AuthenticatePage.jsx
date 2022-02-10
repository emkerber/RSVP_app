import React from 'react';
import { useSelector } from 'react-redux';

import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';

function Authenticate() {
  const responses = useSelector((store) => store.responses);

  if (!responses.user_id) {
    console.log('no user id');
    return <RegisterPage />
  } else {
    console.log('yes user id!');
    return <LoginPage />
  }
}

export default Authenticate;