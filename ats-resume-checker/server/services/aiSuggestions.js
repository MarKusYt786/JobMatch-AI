export default function generateAISuggestions({
  resumeText = "",
  jobDescription = "",
  missingKeywords= [],
  score = 0
}) {
  const suggestions = [];

  // 1️⃣ Missing keywords → strongest signal
  if (missingKeywords.length > 0) {
    suggestions.push(
      `Add these missing keywords naturally into your resume: ${missingKeywords.slice(0, 6).join(", ")}.`
    );
  }

  // 2️⃣ Resume length check
  if (resumeText.split(" ").length < 250) {
    suggestions.push(
      "Your resume appears too short. Add more project details, responsibilities, and measurable achievements."
    );
  }

  // 3️⃣ Action verbs check
  const actionVerbs = ["built", "developed", "implemented", "designed", "optimized"];
  const hasActionVerbs = actionVerbs.some(v =>
    resumeText.toLowerCase().includes(v)
  );

  if (!hasActionVerbs) {
    suggestions.push(
      "Use strong action verbs like Built, Developed, Implemented, Designed, or Optimized in your bullet points."
    );
  }

  // 4️⃣ Experience section check
  if (!resumeText.toLowerCase().includes("experience")) {
    suggestions.push(
      "Add a clear EXPERIENCE section. ATS systems prioritize professional experience heavily."
    );
  }

  // 5️⃣ Skills section density
  if (!resumeText.toLowerCase().includes("skills")) {
    suggestions.push(
      "Add a dedicated SKILLS section listing technical tools, frameworks, and languages."
    );
  }

  // 6️⃣ ATS score based advice
  if (score < 70) {
    suggestions.push(
      "Your ATS score is below 70. Prioritize aligning your resume keywords with the job description."
    );
  }

  // 7️⃣ JD alignment suggestion
  if (jobDescription.length > 200 && score < 85) {
    suggestions.push(
      "Mirror the job description language more closely to improve ATS keyword matching."
    );
  }

  // Fallback
  if (suggestions.length === 0) {
    suggestions.push(
      "Your resume is well optimized for ATS systems. Consider tailoring it slightly for each job role."
    );
  }

  return suggestions;
}
