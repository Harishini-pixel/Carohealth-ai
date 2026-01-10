function simplifyDischarge(text, lang = "en") {
  const responses = {
    en: `Based on the information provided, here is a simplified explanation:
• Follow discharge instructions carefully
• Take medicines as prescribed
• Monitor symptoms daily
• Attend follow-up visits`,
    ta: `கொடுக்கப்பட்ட தகவலின் அடிப்படையில் எளிய விளக்கம்:
• மருத்துவர் கூறிய வழிமுறைகளை பின்பற்றவும்
• மருந்துகளை சரியாக எடுத்துக்கொள்ளவும்`
  };

  return responses[lang] || responses.en;
}

module.exports = { simplifyDischarge };