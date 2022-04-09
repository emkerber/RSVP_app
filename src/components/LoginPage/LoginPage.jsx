import React from 'react';
import LoginText from '../LoginText/LoginText';
import LoginForm from '../LoginForm/LoginForm';
// import { useHistory } from 'react-router-dom';

function LoginPage() {
  // const history = useHistory();

  return (
    <div>

      <LoginText />

      <LoginForm />

      {/* <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center> */}
    </div>
  );
}

export default LoginPage;
