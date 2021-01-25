const Migrations = artifacts.require("Migrations");
const SampleUsingBerry = artifacts.require("SampleUsingBerry");

const mainnetAddress = "";
const testAddress = "0x7DdC408C0Cd13D3543156AE2bc5772C56E91AA0f";

module.exports = function (deployer, network) {
  if (network == "bsc") {
    deployer.deploy(SampleUsingBerry, mainnetAddress);
  } else {
    deployer.deploy(SampleUsingBerry, testAddress);
  }
};
