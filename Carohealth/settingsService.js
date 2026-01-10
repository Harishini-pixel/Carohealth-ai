function applySettings(settings) {
  return {
    notificationsEnabled: settings.notifications ?? false,
    language: settings.language ?? "en"
  };
}

module.exports = { applySettings };