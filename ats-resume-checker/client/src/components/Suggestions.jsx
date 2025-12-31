import React from "react";

const Suggestions = ({ issues }) => {
  return (
    <div>
      <h3>ATS Suggestions</h3>
      <ul>
        {issues?.map((issue, i) => (
          <li key={i}>{issue}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
