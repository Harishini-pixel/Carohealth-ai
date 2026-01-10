const MEDICINES = {
  paracetamol: {
    name: "Paracetamol",
    use: "Reduces fever and relieves pain",
    dosage: "As prescribed by doctor",
    warning: "Do not exceed recommended dose"
  }
};

function explainTablet(name) {
  if (!name) return null;

  return MEDICINES[name.toLowerCase()] || {
    name,
    use: "Medicine information not available",
    dosage: "Consult doctor",
    warning: "This is not a diagnosis"
  };
}

module.exports = { explainTablet };