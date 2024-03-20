import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm.jsx';
import PasswordForm from './PasswordForm.jsx';

function Taskbar(props) {
  // const user = useSelector((state) => state.user);
  // console.log('this is user', user);
  // const showUser = useSelector((state) => state.user && state.user.name);

  const [loginPopup, toggleLoginPopup] = useState(false);
  const [passPopup, togglePassPopup] = useState(false);
  return (
    <div className='taskbar'>
      <div className='title'>
        <h2>Codesmith ECRI 44</h2>
      </div>
      {/* style to have top header on left and residents and instructors on right I have no idea howta do that grid or flux */}
      <div className='features'>
        <a href='#residents'>Residents</a>
        <a href='#instructors'>Instructors</a>
        {showUser && <h2>{user.name}</h2>}
        {showUser ? (
          <button onClick={() => togglePassPopup(!passPopup)}>Change Password</button>
        ) : (
          <button onClick={() => toggleLoginPopup(!loginPopup)}>Log In</button>
        )}
        {/* {loginPopup && <LoginForm onClose={showLogin} />}
        {passPopup && <PasswordForm onClose={showPassword} />} */}
      </div>
    </div>
  );
}

export default Taskbar;
