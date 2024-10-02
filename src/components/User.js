import React, { useState } from 'react';

const User = ({ user, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  // Handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  // Save the edited user details
  const handleSave = () => {
    onEdit(user.id, updatedUser); // Pass updated user to the parent handler
    setIsEditing(false); // Exit editing mode
  };

  // Handle canceling the edit operation
  const handleCancel = () => {
    setUpdatedUser({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    setIsEditing(false);
  };




  return (
    <div className="user">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={updatedUser.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default User;
