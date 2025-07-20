import "./App.css";
import React, { useState } from "react";
import UserSelector from "./components/UserSe";
import ClaimButton from "./components/ClaimB";
import Leaderboard from "./components/Leader";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [claimedPoints, setClaimedPoints] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [refreshUsers, setRefreshUsers] = useState(false);

  const handleClaim = (data) => {
    setClaimedPoints(data.message);
    setRefreshFlag(!refreshFlag);
  };

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
    setClaimedPoints(null);
  };

  return (
    <div>
      <div className="bg-[#f5f3f3] min-h-screen">
        <Navbar />
        <p className="text-center text-red-700 font-semibold">*Database was not hosted*</p>
        <UserSelector
          selectedUser={selectedUser}
          setSelectedUser={handleUserSelect}
          refreshUsers={refreshUsers}
        />

        <ClaimButton selectedUser={selectedUser} onClaim={handleClaim} />

        {claimedPoints && (
          <p
            style={{
              marginLeft: "20px",
              backgroundColor: "#e9e7e7eb",
              padding: "5px",
              marginTop: "10px",
              borderRadius: "5px",
              height: "40px",
              width: "260px",
              textAlign: "center",
            }}
          >
            {claimedPoints}
          </p>
        )}

        <Leaderboard refresh={refreshFlag} />
        {/* 
      {selectedUser && <ClaimHistory selectedUser={selectedUser} />} */}
      </div>
    </div>
  );
};

export default App;
