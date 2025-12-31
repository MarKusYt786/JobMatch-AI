import React from "react";
import ScoreCard from "../components/ScoreCard";
import KeywordMatch from "../components/KeywordMatch";
import Suggestions from "../components/Suggestions";

const Result = ({ data }) => {
  return (
    <div>
      <ScoreCard score={data.atsScore} friendly={data.atsFriendly} />

      <KeywordMatch
        matched={data.matchedKeywords}
        missing={data.missingKeywords}
      />

      <Suggestions issues={data.atsIssues} />
    </div>
  );
};

export default Result;
