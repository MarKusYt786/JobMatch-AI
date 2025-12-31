import fs from "fs";
import { parseResume } from "../services/resumeParser.js";
import { matchKeywords } from "../services/keywordMatcher.js";
import { calculateScore } from "../services/scoreCalculator.js";
import { cleanText } from "../utils/cleanText.js";
import generateAISuggestions from "../services/aiSuggestions.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file || !req.body.jobDescription) {
      return res
        .status(400)
        .json({ message: "Missing resume or job description" });
    }

    const resumePath = req.file.path;
    const jobDescription = req.body.jobDescription;

    // 1️⃣ Parse resume
    const resumeTextRaw = await parseResume(resumePath);

    // 2️⃣ Clean text
    const resumeText = cleanText(resumeTextRaw);

    if (!resumeText || resumeText.length < 50) {
  return res.status(400).json({
    message: "Resume text could not be extracted. Please upload a valid PDF."
  });
}

    const jdText = cleanText(jobDescription);

    // 3️⃣ Keyword match
    const keywordResult = matchKeywords(resumeText, jdText);
    const matchedKeywords = keywordResult.matched;
    const missingKeywords = keywordResult.missing;

    // 4️⃣ Score calculation
    const score = calculateScore(keywordResult);

    // 5️⃣ AI Suggestions
    const suggestions = generateAISuggestions({
      resumeText,
      jobDescription: jdText,
      missingKeywords,
      score,
    });

    // 6️⃣ Delete uploaded file safely
    fs.unlink(resumePath, () => {});

    // 7️⃣ Send ONE final response
    return res.json({
      score: score,
      status: score >= 70 ? "ATS Friendly" : "Needs Improvement",
      matchedKeywords: matchedKeywords,
      missingKeywords: missingKeywords,
      suggestions,
      preview: resumeText.slice(0, 800),
    });

  } catch (error) {
    console.error("ANALYZE ERROR:", error);
    return res.status(500).json({ message: "Analysis failed" });
  }
};
