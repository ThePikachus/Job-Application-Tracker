import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Input({ name }) {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState();

  const handlePost = async (e) => {
    e.preventDefault();
    console.log("name", name);
    const data = {
      post: inputText,
      name: name,
    };

    try {
      const response = await fetch("/residents/addPost", {
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
      <form className="commentInput">
        <button type="submit" onClick={handlePost}>
          Post
        </button>
      </form>
      <input
        className="commentInput"
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}

export default Input;
