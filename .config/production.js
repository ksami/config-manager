const debug = require("debug");
const EventEmitter = require("events");

const d = debug("config-manager:test-prod-config")
const myEmitter = new EventEmitter();
myEmitter.on("test-event", msg => d("test-event received, msg:", msg));

module.exports = {
    debugger: d,
    emitter: myEmitter,
    credentials: "production credentials"
};