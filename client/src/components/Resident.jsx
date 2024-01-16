import React from "react";

function Resident({
  key,
  name,
  backgroundColor,
  picture,
  bio,
  pronouns,
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
    <div className="resident">
      <img id="pic" src={picture}></img>
      <div key={key} className="resident-card" onClick={onClick} style={style}>
        <div className="resident-text">
          <h3 id="name">{name}</h3>
          <div className="pronouns">{pronouns}</div>
          <div className="bio">{bio}</div>
        </div>
      </div>
    </div>
  );
}

export default Resident;
