var SeqStudio = artifacts.require("./SeqStudio.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SeqStudio);
  deployer.deploy(SimpleStorage);
};
