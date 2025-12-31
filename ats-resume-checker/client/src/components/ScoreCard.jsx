import React from "react";

const ScoreCard = ({ score, friendly }) => {
  return (
    <div>
      <h2>ATS Score: {score}/100</h2>
      <p>Status: {friendly ? "ATS Friendly ✅" : "Not ATS Friendly ❌"}</p>
    </div>
  );
};

export default ScoreCard;
