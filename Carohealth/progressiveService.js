function calculateProgress(weight, height) {
  if (!weight || !height) return null;

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  return {
    weight,
    height,
    bmi,
    note: "BMI is an indicator, not a diagnosis"
  };
}

module.exports = { calculateProgress };