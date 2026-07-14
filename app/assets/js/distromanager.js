const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

const BASE_URL = "https://github.com/jonasbeneteau-maker/launcher-NW-mods/blob/main/manifest.json";

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    BASE_URL,
    false
)

exports.DistroAPI = api