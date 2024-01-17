import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
function Taskbar(props) {
  const user = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();

  const showLogin = () => {
    if (loginPopup) {
      toggleLoginPopup(false);
    } else {
      toggleLoginPopup(true);
    }
  };
  return (
    <div className="taskbar">
      <h2>Codesmith ECRI 44</h2>
      {/* style to have top header on left and residents and instructors on right I have no idea howta do that grid or flux */}
      <button>Residents</button>
      <button>Instructors</button>
      {user ? <h2>{user.name}</h2> : <button onClick={showLogin}>Log In</button>}
    </div>
  );
}

export default Taskbar;
