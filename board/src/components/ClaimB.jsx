import React from "react";
import { claimPoints } from "../api";

const ClaimB = ({ selectedUser, onClaim }) => {
  const handleClaim = async () => {
    if (!selectedUser) {
      alert("Please select a user first.");
      return;
    }

    const res = await claimPoints(selectedUser);
    onClaim(res.data); // pass claimed result back
  };

  return <button className="bg-[#e9e7e7eb] p-2 rounded-md w-[120px] ml-5" onClick={handleClaim}>Claim Points</button>;
};

export default ClaimB;
