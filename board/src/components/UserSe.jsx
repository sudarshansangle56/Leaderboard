import React, { useEffect, useState } from "react";
import { getUsers, addUser } from "../api";

const UserSe = ({ selectedUser, setSelectedUser, refreshUsers }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [refreshUsers]);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleAddUser = async () => {
    if (newUser.trim()) {
      await addUser(newUser);
      setNewUser("");
      fetchUsers();
    }
  };

  return (
    <div className=" flex items-center m-3  justify-center">
        <div className="bg-white h-[50px] w-[30%] rounded-lg m-3 flex items-center justify-center gap-5" >
        <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <input
      className="border-2 border-[#2222229c] rounded-md p-1 "
        type="text"
        placeholder="Add new user"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button className="bg-[#e9e7e7eb] p-2 rounded-md w-[70px]" onClick={handleAddUser}>Add</button>
        </div>
     
    </div>
  );
};

export default UserSe;
