import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PasswordForm = ({ onClose }) => {
  const name = useSelector((state) => state.user.name);
  const [formData, setFormData] = useState({
    oldPass: '',
    newPass: '',
    name: name,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/login/changePass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      onClose();
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div className='popup-content'>
      <button onClick={onClose} className='close-button' type='button'>
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <label>Old Password</label>
        <input
          name='oldPass'
          type='password'
          placeholder='probably 'codesmith''
          value={formData.user}
          onChange={handleChange}
        />
        <label>New Password</label>
        <input
          name='newPass'
          type='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default PasswordForm;
