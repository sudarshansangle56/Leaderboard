import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../api";

const Leader = ({ refresh }) => {
  const [leaderboard, setLeaderboard] = useState([]);

  // Step 1: Create the constant alien user
  const alienUser = {
    name: "Alien 👽",
    totalPoints: 999,
    rank: "🪐",
    avatar: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH8nlBtXRcMkngT28C9hah94vEXs9o1ZP2_ts0wkQrqq_IgYY5",
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [refresh]);

  const fetchLeaderboard = async () => {
    try {
      const res = await getLeaderboard();
      const backendUsers = res?.data || [];

      const updatedList = [alienUser, ...backendUsers];

      setLeaderboard(updatedList);
    } catch (err) {
      console.error("Failed to fetch leaderboard:", err);
      setLeaderboard([alienUser]);
    }
  };

  return (
    <div className='flex flex-wrap'>
      {leaderboard.map((user, index) => (
        <div
          key={user._id || index}
          className='bg-[#ffffff] h-[300px] w-[300px] rounded-xl m-4 flex'
        >
          <div className="w-[50%] h-[100%] rounded-xl flex items-center justify-evenly flex-col">
            <h1 className="font-serif text-[25px] flex flex-col">
              19 <span className="text-[#222222c9] text-[10px]">Mar</span>
            </h1>
            <h1 className="flex flex-col text-[20px] font-semibold">
              Rank {user.rank || index + 1}
              <span className="text-[#222222c9] text-[15px]">
                {user.totalPoints}-point
              </span>
            </h1>
            <h1 className="font-sans text-[23px] text-center italic font-semibold">
              {user.name}
            </h1>
          </div>
          <div className="w-[50%] h-[100%] rounded-xl flex items-center justify-center">
            <img
              className="h-[80%] w-[100%] object-cover rounded-xl p-2"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH8nlBtXRcMkngT28C9hah94vEXs9o1ZP2_ts0wkQrqq_IgYY5"
              alt={user.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leader;
