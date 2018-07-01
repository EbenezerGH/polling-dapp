var Voting = artifacts.require("./Voting.sol");

contract('Voting', function(accounts) {
    it('should load candidate names into ballot', function() {
        var votingInstance;
        return Voting.deployed().then(function(instance) {
            votingInstance = instance;
            return votingInstance.candidateList.call(); 
    }).then(function(candidateList) {
        assert.(candidateList,)
    });
});
}
    
/*
functionality to test

votes received
candidatenames - constructor
totalvotesfor
voteforcandidate
validcandidate
*/