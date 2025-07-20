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
        <div className="bg-white h-[50px] min-w-[30%] border-[1px] border-[#7373734f]  px-5 rounded-lg m-3 flex items-center justify-center gap-5" >
        <select className="text-[14px]" onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <input
      className="border-[1px] border-[#22222251] rounded-md p-1 "
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
