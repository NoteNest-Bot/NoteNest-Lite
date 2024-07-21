// settingsManager.js
const settings = new Map();

module.exports = {
    get(guildId, key, defaultValue) {
        const guildSettings = settings.get(guildId) || {};
        return guildSettings[key] !== undefined ? guildSettings[key] : defaultValue;
    },
    set(guildId, key, value) {
        const guildSettings = settings.get(guildId) || {};
        guildSettings[key] = value;
        settings.set(guildId, guildSettings);
    },
};
