import React, { useState, useEffect } from 'react';
import User from './User';
import { fetchUsers, deleteUser } from '../api/api'; // Ensure you import deleteUser function

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsersData();
  }, []);

  // Function to delete a user
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId); // API call to delete user
      setUsers(users.filter((user) => user.id !== userId)); // Update state after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} onDelete={handleDelete} /> {/* Pass onDelete correctly */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
