const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

const BASE_URL = "https://novaworld-mc.fr/launcher/index.json";

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api