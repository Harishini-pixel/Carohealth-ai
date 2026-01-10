function generateCarePlan() {
  return {
    dailyCare: [
      "Take medicines on time",
      "Drink sufficient water",
      "Get adequate rest",
      "Avoid heavy physical activity"
    ],
    reminders: [
      "Medicine reminder",
      "Follow-up appointment reminder"
    ]
  };
}

module.exports = { generateCarePlan };