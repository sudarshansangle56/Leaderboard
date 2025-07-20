
import './App.css';
import React, { useState } from "react";
import UserSelector from "./components/UserSe";
import ClaimButton from "./components/ClaimB";
import Leaderboard from "./components/Leader";
import ClaimHistory from "./components/ClaimHis";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [claimedPoints, setClaimedPoints] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [refreshUsers, setRefreshUsers] = useState(false);

  const handleClaim = (data) => {
    setClaimedPoints(data.message);
    setRefreshFlag(!refreshFlag); // refresh leaderboard
  };

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
    setClaimedPoints(null); // reset points message
  };

  return (
    <div className="bg-[#f5f3f3] min-h-screen">
      <Navbar/>
      

      <UserSelector
        selectedUser={selectedUser}
        setSelectedUser={handleUserSelect}
        refreshUsers={refreshUsers}
      />

      <ClaimButton selectedUser={selectedUser} onClaim={handleClaim} />

      {claimedPoints && <p style={{ fontWeight: "bold" }}>{claimedPoints}</p>}

      <Leaderboard refresh={refreshFlag} />
{/* 
      {selectedUser && <ClaimHistory selectedUser={selectedUser} />} */}
    </div>
  );
};

export default App;
