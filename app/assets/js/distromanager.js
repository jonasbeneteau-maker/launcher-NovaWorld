const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

const BASE_URL = "https://jonasbeneteau-maker.github.io/launcher-NW-mods/distribution.json";

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    BASE_URL,
    false
)

exports.DistroAPI = api