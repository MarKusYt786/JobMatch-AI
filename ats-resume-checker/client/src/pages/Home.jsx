import React from "react";
import UploadResume from "../components/UploadResume";

export default function Home() {
  return (
    <section className="home-container">

      {/* LEFT SIDE */}
      <div className="home-left">

        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <div>
            <h3>ATS Simulation</h3>
            <p>
              Get an estimated score based on how real ATS systems scan,
              parse, and rank resumes.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <div>
            <h3>Keyword Match</h3>
            <p>
              Identify missing and matched keywords from the job description
              that recruiters expect.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🤖</span>
          <div>
            <h3>AI Suggestions</h3>
            <p>
              Receive AI-powered improvements for bullet points,
              structure, and resume clarity.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE (UNCHANGED FUNCTIONALITY) */}
      <div className="home-right">
        <UploadResume />
      </div>

    </section>
  );
}
