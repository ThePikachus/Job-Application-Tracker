import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input.jsx";

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
        style={{ backgroundColor: profile.backgroundColor }}
      >
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        <h2>{profile.name}</h2>
        <p className="bio">{profile.bio}</p>
        <ul className="messages">
          {profile.messages.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
        {user ? null : <Input name={profile.name} />}
      </div>
    </div>
  );
};

export default Popup;
