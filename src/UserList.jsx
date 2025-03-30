// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      <div className="users-grid">
        {listOfUsers.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>📧 {user.email}</p>
            <p>📱 {user.phone}</p>
            <p>🌐 {user.website}</p>
            <div className="user-address">
              <h4>Address:</h4>
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;