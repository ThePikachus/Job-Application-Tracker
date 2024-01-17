import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input.jsx";
import Edit from "./Edit.jsx";

const Popup = ({ profile, onClose }) => {
  //useSelector for user profile name
  const user = useSelector((state) => {
    return state.user.name === profile.name;
  });
  console.log("hi", profile);
  return (
    <div className="popup-overlay">
      <div
        className="popup-content"
        style={{ backgroundColor: profile.background_color }}
      >
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        <h2>{profile.name}</h2>
        <p className="bio">{profile.phrase}</p>
        <ul className="messages">
          {profile.comments.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
        {user ? <Edit /> : <Input name={profile.name} />}
      </div>
    </div>
  );
};

export default Popup;
