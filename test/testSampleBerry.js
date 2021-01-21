// const SampleUsingBerry = artifacts.require("./SampleUsingBerry.sol");
// const Berry = artifacts.require("BerryPlayground.sol");

// //Helper function that submits and value and returns a timestamp for easy retrieval
// const submitBerryValue = async (berryOracle, requestId, amount) => {
//   //Get the amount of values for that timestamp
//   let count = await berryOracle.getNewValueCountbyRequestId();
//   await berryOracle.submitValue(requestId, amount);
//   let time = await getTimestampbyRequestIDandIndex(requestId, count.toString());
//   return time.toNumber();
// };

// contract("UsingBerry Tests", function (accounts) {
//   let sampleUsingBerry;
//   let berryOracle;

//   beforeEach("Setup contract for each test", async function () {
//     berryOracle = await Berry.new();
//     sampleUsingBerry = await SampleUsingBerry.new(berryOracle.address);
//   });

//   it("Update Price", async function () {
//     const requestId = 1;
//     const mockValue = "7000000";
//     await berryOracle.submitValue(requestId, mockValue);
//     let retrievedVal = await sampleUsingBerry.readBerryValue(requestId);
//     assert.equal(retrievedVal.toString(), mockValue);
//   });
// });
