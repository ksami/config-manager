const lib = require("./lib/index");
const d = require("debug")("config-manager:main");


// Run as entry point
if (require.main === module) {
    require("dotenv").config();

    const environment = lib.getEnvironment();
    const config = lib.getConfig(environment);

    d(config);
}