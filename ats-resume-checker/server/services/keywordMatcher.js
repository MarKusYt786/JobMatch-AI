export const matchKeywords = (resumeText, jdText) => {
  const resumeWords = new Set(resumeText.split(/\W+/));
  const jdWords = new Set(jdText.split(/\W+/));

  const matched = [];
  const missing = [];

  jdWords.forEach(word => {
    if (word.length < 3) return;
    if (resumeWords.has(word)) matched.push(word);
    else missing.push(word);
  });

  return { matched, missing };
};
