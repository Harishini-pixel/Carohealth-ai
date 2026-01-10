function generateReport(data) {
  return `
HEALTH REPORT
-------------
Status: ${data.health.label}
Summary: ${data.summary}

${data.disclaimer}
`;
}

module.exports = { generateReport };