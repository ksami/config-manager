const lib = require("./lib");
const d = require("debug")("config-manager:main");

// Run as entry point
if (require.main === module) {
    require("dotenv").config();
}

const environment = lib.getEnvironment();
let config = {};

if (environment === "production") {
    config = lib.getConfig("production");
} else if (environment === "staging") {
    let prodConfig = lib.getConfig("production");
    config = Object.assign(prodConfig, lib.getConfig("staging"));
} else if (environment === "development") {
    let prodConfig = lib.getConfig("production");
    try {
        prodConfig = Object.assign(prodConfig, lib.getConfig("staging"));
    } catch(err) {
        // ignore
        d(err);
    }
    config = Object.assign(prodConfig, lib.getConfig("development"));
} else {
    throw new Error(`Environment ${environment} not recognised`);
}

d("Config found, config is");
d(config);

module.exports = config;

// Run as entry point
if (require.main === module) {
    config.debugger(`Credentials: ${config.credentials}`);
    config.emitter.emit("test-event", "event emitted");
}