import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Edit() {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const [colorText, setcolorText] = useState();
  const [bioText, setbioText] = useState();
  const [pronounText, setpronounText] = useState();

  const applyEdit = async (e) => {
    e.preventDefault();
    console.log("name", name);
    const data = {
      color: colorText,
      bio: bioText,
      pronouns: pronounText,
      name: name,
    };
    console.log("full edit req body", data);
    try {
      const response = await fetch("/login/editUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Post request successful");
      } else {
        console.error("Post request failed");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      <form className="editUser">
        <input
          type="text"
          placeholder="set your background color to any valid CSS color!"
          value={colorText}
          onChange={(e) => setcolorText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Express yourself with a bio phrase!"
          value={bioText}
          onChange={(e) => setbioText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Let us know your pronouns!"
          value={pronounText}
          onChange={(e) => setpronounText(e.target.value)}
        />
        <button type="submit" onClick={applyEdit}>
          Apply
        </button>
      </form>
    </div>
  );
}

export default Edit;
