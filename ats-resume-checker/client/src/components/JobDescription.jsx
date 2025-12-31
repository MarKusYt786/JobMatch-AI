import React from "react";

function JobDescription({ setJobDescription }) {
  return (
    <textarea
      rows="6"
      placeholder="Paste job description here"
      onChange={(e) => setJobDescription(e.target.value)}
    />
  );
}

export default JobDescription;
