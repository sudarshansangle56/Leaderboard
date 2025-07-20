import React, { useEffect, useState } from "react";
import { getHistory } from "../api";

const ClaimHis = ({ selectedUser }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (selectedUser) {
      fetchHistory();
    }
  }, [selectedUser]);

  const fetchHistory = async () => {
    const res = await getHistory(selectedUser);
    setHistory(res.data);
  };

  return (
    <div>
      <h3>📜 Claim History</h3>
      <table>
        <thead>
          <tr>
            <th>Points</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item._id}>
              <td>{item.points}</td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimHis;
