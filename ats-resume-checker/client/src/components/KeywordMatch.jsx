import React from "react";

const KeywordMatch = ({ matched, missing }) => {
  return (
    <div>
      <h3>Keyword Analysis</h3>

      <p><strong>Matched Keywords:</strong></p>
      <ul>
        {matched?.map((k, i) => (
          <li key={i}>{k}</li>
        ))}
      </ul>

      <p><strong>Missing Keywords:</strong></p>
      <ul>
        {missing?.map((k, i) => (
          <li key={i}>{k}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordMatch;
