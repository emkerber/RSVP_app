import React from 'react';
// import { useHistory } from 'react-router-dom';
import RegisterText from '../RegisterText/RegisterText';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  // const history = useHistory();

  return (
    <div>
      
      <RegisterText />
        
      <RegisterForm />

      {/* // <center>
      //   <button
      //     type="button"
      //     className="btn btn_asLink"
      //     onClick={() => {
      //       history.push('/login');
      //     }}
      //   >
      //     Login
      //   </button>
      // </center> */}
    </div>
  );
}

export default RegisterPage;
