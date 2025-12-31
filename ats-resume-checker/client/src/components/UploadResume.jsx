import React, { useState } from "react";
import axios from "axios";
import "../styles/rightCard.css";

export default function UploadResume() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!resume || !jobDescription) {
      alert("Please upload resume and job description");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume/analyze",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="right-card">
      <h3 className="right-card-title">Resume Review</h3>
      <p className="right-card-subtitle">
        Upload your resume and job description to get started.
      </p>

      {/* Resume Upload */}
      <div className="upload-block">
        <label className="upload-label">Resume</label>
        <label className="upload-box">
          <span>{resume ? resume.name : "Upload Resume"}</span>
          <input
            type="file"
            accept=".pdf"
            hidden
            onChange={(e) => setResume(e.target.files[0])}
          />
        </label>
      </div>

      {/* Job Description */}
      <div className="upload-block">
        <label className="upload-label">Job Description</label>
        <textarea
          className="jd-box"
          placeholder="Paste job description here"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <button
        className="analyze-btn"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {loading && (
        <div className="loading-overlay">
          <p>Analyzing your resume…</p>
        </div>
      )}

      {/* 🔽 ANALYSIS RESULT */}
      {result && (
        <div className="analysis-result">
          <h4>Analysis Report</h4>

          {/* Progress Bar */}
          <div className="progress-wrapper">
            <div className="progress-label">
              <strong>ATS Score:</strong> {result.score}%
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${result.score}%` }}
              />
            </div>
          </div>

          <p>
            <strong>Status:</strong>
          </p>

          <p>
            {result.score >= 70 ? "ATS Friendly ✅" : "Needs Improvement ⚠️"}
          </p>

          <div className="keywords">
            <h5>
              <strong>Matched Keywords</strong>
            </h5>
            <div className="keyword-list success">
              <ul>
                {Array.isArray(result.matchedKeywords) &&
                result.matchedKeywords.length > 0 ? (
                  result.matchedKeywords.map((kw, i) => <li key={i}>{kw}</li>)
                ) : (
                  <li>None 😢</li>
                )}
              </ul>
            </div>

            <h5>
              <strong>Missing Keywords</strong>
            </h5>
            <div className="keyword-list danger">
              <ul>
                {Array.isArray(result.missingKeywords) &&
                result.missingKeywords.length > 0 ? (
                  result.missingKeywords.map((kw, i) => <li key={i}>{kw}</li>)
                ) : (
                  <li>None 😊</li>
                )}
              </ul>
            </div>

            <h5>
              <strong>Suggestions</strong>
            </h5>
            <div className="suggestion-list">
              <ul>
                {Array.isArray(result.suggestions) &&
                  result.suggestions.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
