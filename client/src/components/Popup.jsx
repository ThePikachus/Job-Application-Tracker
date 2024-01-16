import React from "react";

const Popup = ({ profile, onClose }) => {
  console.log("hi", profile);
  return (
    <div className="popup-overlay">
      <div className="popup-content">
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
      </div>
    </div>
  );
};

export default Popup;
