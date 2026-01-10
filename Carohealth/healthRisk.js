function assessHealthRisk(text) {
  const t = text.toLowerCase();

  if (t.includes("unconscious") || t.includes("cardiac"))
    return { level: 5, color: "black", label: "Extremely Dangerous" };

  if (t.includes("breathing") || t.includes("bleeding"))
    return { level: 4, color: "red", label: "Critical" };

  if (t.includes("severe pain"))
    return { level: 3, color: "orange", label: "Moderate Risk" };

  if (t.includes("cold") || t.includes("headache"))
    return { level: 2, color: "yellow", label: "Mild Risk" };

  return { level: 1, color: "green", label: "Stable" };
}

module.exports = { assessHealthRisk };