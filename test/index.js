const chai = require("chai");
const lib = require("../lib");

chai.should();

describe("#getEnvironment", function() {
    it("should default to production", function() {
        delete process.env.NODE_ENV;
        const env = lib.getEnvironment();
        env.should.be.equal("production");
    });

    it("should convert to lower case", function() {
        process.env.NODE_ENV = "DEVELOPMENT";
        const env = lib.getEnvironment();
        env.should.be.equal("development");
    });
});