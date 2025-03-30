// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full  bg-gray-100 p-4">
      <h1 className="text-center text-2xl font-bold py-3">List of Users</h1>
      <div className="flex flex-wrap justify-starts-center">
        {listOfUsers.length === 0 && (
          <div className="text-center text-gray-500">Loading...</div>
        )}
        {listOfUsers.map((user) => (
          <div key={user.id} className="w-full md:w-1/4 lg:w-1/4 p-4 border">
            <h2 className="font-semibold text-xl pb-2">{user.name}</h2>
            <p className="text-blue-400 text-sm ">📧 {user.email}</p>
            <p className=" tracking-wide font-semibold">📱 {user.phone}</p>
            <p className="text-blue-400 text-sm ">🌐 {user.website}</p>
            <div className="mt-4">
              <h4 className="font-semibold">📍 Address:</h4>
              <p className="text-sm hover:cursor-pointer hover:text-blue-500 hover:font-semibold">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-sm hover:cursor-pointer hover:text-blue-500 hover:font-semibold">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
