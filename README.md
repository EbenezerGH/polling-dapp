# Polling dapp

truffle + web3js + nodeJS + webpack


## Initial Configurations


download ethereum environment

```
brew tap ethereum/ethereum
brew install ethereum
```

run geth in download part of blockchain in seperate terminal window
```
geth --rinkeby --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*"
```

install truffle
```
sudo npm install -g truffle
```

install truffle box webpack
```
sudo npm install -g webpack
truffle unbox webpack
```

## Deployment

compile and deploy contract to the rigby blockchain
```
truffle console

truffle(development)> web3.personal.newAccount('###########')
'0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06'

truffle(development)> web3.eth.getBalance(0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06').toString()
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }

truffle(development)> web3.personal.unlockAccount('0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06', '('###########')', 15000)

// Replace '('###########')' with a good strong password.

```

Get some test ether from rigby faucet (https://faucet.rinkeby.io/)
```
https://plus.google.com/u/0/105649615752602866498/posts/cBfQssiSHWF
```
check balance again
```
https://rinkeby.etherscan.io/address/0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06
```

migrate contract to the blockchain
```
truffle migrate
```

start the server and check hosting location
```
npm run dev
http://localhost:8080/#
```

## References
https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f
https://truffleframework.com/boxes/webpack
https://truffleframework.com/
http://solidity.readthedocs.io/en/v0.4.24/
https://faucet.rinkeby.io/
https://rinkeby.etherscan.io/
