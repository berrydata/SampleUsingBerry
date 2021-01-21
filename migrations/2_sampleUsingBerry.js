const Migrations = artifacts.require("Migrations");
const SampleUsingBerry = artifacts.require("SampleUsingBerry");
// const BerryPlayground = artifacts.require("BerryPlayground");

const mainnetAddress = "";
const testAddress = "";

module.exports = function (deployer, network) {
  if (network == "mainnet") {
    deployer.deploy(SampleUsingBerry, mainnetAddress);
  } else if (
    network == "rinkeby" ||
    network == "goerli" ||
    network == "kovan" ||
    network == "ropsten"
  ) {
    deployer.deploy(SampleUsingBerry, testAddress);
  } else {
    deployer.deploy(SampleUsingBerry, testAddress);
  }
};
