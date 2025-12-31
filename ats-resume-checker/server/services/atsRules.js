export const applyAtsRules = (text) => {
  const issues = [];

  if (text.includes("|")) {
    issues.push("Tables detected – ATS may not read tables correctly.");
  }
  if (!text.includes("skills")) {
    issues.push("Missing Skills section.");
  }

  return issues;
};
