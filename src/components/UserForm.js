// src/components/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState(user ? user.phone : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;