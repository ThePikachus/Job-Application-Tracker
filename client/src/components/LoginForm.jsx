import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice.js";

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ user: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const userData = await response.json();
      console.log("response", userData);
      dispatch(setUser(userData));
      onClose();
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="popup-content">
      <button onClick={onClose} className="close-button" type="button">
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="user"
          type="text"
          value={formData.user}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
