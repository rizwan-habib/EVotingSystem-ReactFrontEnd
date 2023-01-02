var candidates_contract = artifacts.require("Candidates");
var vote_contract = artifacts.require("Voters");
var elections_winner = artifacts.require("ElectionsWinner");
module.exports = function(deployer){
    deployer.deploy(candidates_contract,["ibtisam","moiz","rizwan","anser"]);
    deployer.deploy(vote_contract);
    deployer.deploy(elections_winner);
}