import React from "react";

function Resident({
  key,
  name,
  backgroundColor,
  picture,
  bio,
  pronouns,
  messages,
  onClick,
}) {
  const style = {
    backgroundColor: backgroundColor,
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    cursor: "pointer",
  };
  return (
    <div
      id="Resident"
      key={key}
      className="resident-card"
      onClick={onClick}
      style={style}
    >
      <img id="pic" src={picture}></img>
      <h3 id="name">{name}</h3>
      <div id="pronouns">{pronouns}</div>
      <div id="bio">{bio}</div>
      <ul id="messages">
        {messages.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resident;
