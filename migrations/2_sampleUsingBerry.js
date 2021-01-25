const SampleUsingBerry = artifacts.require("SampleUsingBerry");
require("dotenv").config();
const masterAddress = process.env.MASTER;

module.exports = function (deployer, network) {
  deployer.deploy(SampleUsingBerry, masterAddress);
};
