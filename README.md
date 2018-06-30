1)
download ethereum environment
brew tap ethereum/ethereum
brew install ethereum

2)
run geth in download part of blockchain in seperate terminal window
geth --rinkeby --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*"


3)
install truffle
Sudo npm install -g truffle

4)
install truffle box webpack (https://truffleframework.com/boxes/webpack)
Sudo npm install -g webpack
truffle unbox webpack

x...)
Steps updating project code

8)
compile and deploy contract to the rigby blockchain
truffle console

truffle(default)> web3.personal.newAccount('###########')
'0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06'

truffle(default)> web3.eth.getBalance(0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06').toString()
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }

truffle(default)> web3.personal.unlockAccount('0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06', '('###########')', 15000)

// Replace '('###########')' with a good strong password.

9)
Get some test ether from rigby faucet (https://faucet.rinkeby.io/)
https://plus.google.com/u/0/105649615752602866498/posts/cBfQssiSHWF


check balance again
https://rinkeby.etherscan.io/address/0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06


10)
migrate contract to the blockchain
truffle migrate
create readme file w/ steps


11)
go back to truffle console and interact with polling app
Voting.deployed().then(function(contractInstance) {contractInstance.voteForCandidate('Rama').then(function(v) {console.log(v)})})

then..

Voting.deployed().then(function(contractInstance) {contractInstance.totalVotesFor.call('Rama').then(function(v) {console.log(v)})})

12)
start a servcer
npm run dev

http://localhost:8080/#

truffle
ganache
web3js
nodeJS
webpack

Question:
truffle deploying on development or default?
truffle(default) or.. truffle(development)

on testnet does it matter what i keep public/private? passwords, etc.


References:
https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f

truffle migrate --reset