const debug = require("debug");
const fs = require("fs");
const path = require("path");

const basePath = path.dirname(require.main.filename);
const configDir = path.join(basePath, ".config");
const de = debug("config-manager:env");
const df = debug("config-manager:file");

function getConfig(environment) {
    df("Reading directory", configDir);
    
    // Check default folder first
    const configFiles = fs.readdirSync(configDir);
    df("Files found in directory", configFiles);

    // Check for existence
    if (configFiles.length === 0) {
        throw new Error(`${configDir} is empty`);
    }

    if (!configFiles.find(file => file.startsWith(environment))) {
        throw new Error(`Cannot find file starting with ${path.join(configDir, environment)}`);
    }

    // Return exported object
    return require(path.join(configDir, environment));
}

function getEnvironment(){
    let environment;

    if (!process.env.NODE_ENV) {
        de("NODE_ENV not defined, defaulting to production");
        environment = "production";
    } else {
        de("NODE_ENV is", process.env.NODE_ENV);
        environment = process.env.NODE_ENV.toLowerCase();
    }

    return environment;
}

module.exports = {
    getConfig,
    getEnvironment
};