import React from "react";

function Instructor({
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

  if (bio === "undefined") bio = " ";
  if (pronouns === "undefined") name = name;
  else if (pronouns !== "") name = name + ` (${pronouns})`;

  return (
    <div className="instructor">
      <img id="pic" src={picture}></img>
      <div
        key={key}
        className="instructor-card"
        onClick={onClick}
        style={style}
      >
        <div className="instructor-text">
          <h3 id="name">{name}</h3>
          <div className="pronouns">{pronouns}</div>
          <div className="bio">{bio}</div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
