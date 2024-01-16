import React from "react";

function Resident({
  key,
  name,
  backgroundColor,
  picture,
  bio,
  pronouns,
  messages,
}) {
  const style = {
    backgroundColor: backgroundColor,
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div id="Resident" key={key} className="resident-card" style={style}>
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
