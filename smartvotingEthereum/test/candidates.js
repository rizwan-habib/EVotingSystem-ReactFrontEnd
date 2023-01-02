// const ElectionsWinner = artifacts.require("ElectionsWinner");

// contract("ElectionsWinner", (accounts) => {
//     before(async ()=>{
//         instance = await ElectionsWinner.deployed();
//     })
//   it("Anser should win", async () => {

//     // const ElectionsWinnerInstance = await ElectionsWinner.deployed();
//     let winnerName = await instance.
//     let index = await instance.inde();
//     // const balance = await CandidateInstance.getBalance.call(accounts[0]);

//     assert.equal(index, 3, "failed");
//   });

//   it("should call a function that depends on a linked library", async () => {
//     const CandidateInstance = await Candidate.deployed();
//     const CandidateBalance = (
//       await CandidateInstance.getBalance.call(accounts[0])
//     ).toNumber();
//     const CandidateEthBalance = (
//       await metaCoinInstance.getBalanceInEth.call(accounts[0])
//     ).toNumber();

//     assert.equal(
//       metaCoinEthBalance,
//       2 * metaCoinBalance,
//       "Library function returned unexpected function, linkage may be broken"
//     );
//   });
//   it("should send coin correctly", async () => {
//     const metaCoinInstance = await MetaCoin.deployed();

//     // Setup 2 accounts.
//     const accountOne = accounts[0];
//     const accountTwo = accounts[1];

//     // Get initial balances of first and second account.
//     const accountOneStartingBalance = (
//       await metaCoinInstance.getBalance.call(accountOne)
//     ).toNumber();
//     const accountTwoStartingBalance = (
//       await metaCoinInstance.getBalance.call(accountTwo)
//     ).toNumber();

//     // Make transaction from first account to second.
//     const amount = 10;
//     await metaCoinInstance.sendCoin(accountTwo, amount, { from: accountOne });

//     // Get balances of first and second account after the transactions.
//     const accountOneEndingBalance = (
//       await metaCoinInstance.getBalance.call(accountOne)
//     ).toNumber();
//     const accountTwoEndingBalance = (
//       await metaCoinInstance.getBalance.call(accountTwo)
//     ).toNumber();

//     assert.equal(
//       accountOneEndingBalance,
//       accountOneStartingBalance - amount,
//       "Amount wasn't correctly taken from the sender"
//     );
//     assert.equal(
//       accountTwoEndingBalance,
//       accountTwoStartingBalance + amount,
//       "Amount wasn't correctly sent to the receiver"
//     );
//   });
// });