const express = require("express");
const { simplifyDischarge } = require("./aiEngine");
const { explainTablet } = require("./medicineService");
const { assessHealthRisk } = require("./healthRisk");
const { generateCarePlan } = require("./carePlan");
const { calculateProgress } = require("./progressService");
const { getNearbyHealthcareUnits } = require("./hospitalService");
const { generateReport } = require("./reportService");
const { applySettings } = require("./settingsService");
const { DISCLAIMER } = require("./constants");

const app = express();
app.use(express.json());

app.post("/analyze", (req, res) => {
  const {
    text,
    medicine,
    weight,
    height,
    settings
  } = req.body;

  const userSettings = applySettings(settings || {});
  const summary = simplifyDischarge(text, userSettings.language);
  const health = assessHealthRisk(text);
  const tablet = explainTablet(medicine);
  const care = generateCarePlan();
  const progress = calculateProgress(weight, height);
  const hospitals = getNearbyHealthcareUnits();

  const report = generateReport({
    health,
    summary,
    disclaimer: DISCLAIMER
  });

  res.json({
    summary,
    health,
    tablet,
    care,
    progress,
    hospitals,
    report,
    disclaimer: DISCLAIMER
  });
});

app.listen(3000);