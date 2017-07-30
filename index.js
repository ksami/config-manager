const lib = require("./lib");
const d = require("debug")("config-manager:main");

module.exports = lib;

// Run as entry point
if (require.main === module) {
    require("dotenv").config();

    const environment = lib.getEnvironment();
    const config = lib.getConfig(environment);

    d(config);
}