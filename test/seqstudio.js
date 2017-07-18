var SeqStudio = artifacts.require("./SeqStudio.sol");

contract('SeqStudio', function(accounts) {

  it("...should send event.", function() {
    return SeqStudio.deployed().then(function(instance) {
      var seqStudio = instance;

      return seqStudio.setSampleFileId("89", "good", "15", "12345,67890", {from: accounts[0]});
    });
  });

});
