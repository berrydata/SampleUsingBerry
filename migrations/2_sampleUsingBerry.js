const Migrations = artifacts.require("Migrations");
const SampleUsingBerry = artifacts.require("SampleUsingBerry");

// TODO add bsc and testnet berry master address
const bscAddress = "";
const testAddress = "";
const localAddress = "0x7DdC408C0Cd13D3543156AE2bc5772C56E91AA0f";

module.exports = function (deployer, network) {
  if (network === "bsc") {
    deployer.deploy(SampleUsingBerry, bscAddress);
  } else if (network === 'testnet') {
    deployer.deploy(SampleUsingBerry, testAddress);
  } else {
    deployer.deploy(SampleUsingBerry, localAddress);
  }
};
