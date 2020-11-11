# Starting out with a ZRC2 token contract

This repository is useful for experimenting with Zilliqa with minimal fiddling. The official SDK is not easy to install and maintain. It requires many unstated dependencies and must use node within a tight version envelope. For this reason I have created this repository with a standard flow to deploy a coin contract to the testnet under the user's control.

## To use:
Clone this repo

`docker build --tag zillicoin:1.0 .`
`docker run --publish 8000:8080  --name bb zillicoin:1.0`

this will run the built in script. But if you want to have exclusive control over the coin then you will need to set the private key in order to have control over the coin contract. To do this edit the line of app.js that specifies the private key, which you can get from the devnet faucet [webpage](https://dev-wallet.zilliqa.com/generate). After that, use the get_bech32.js script with `node get_bech32 <your private key>` then go to the [faucet](https://dev-wallet.zilliqa.com/faucet) and request testnet funds to this address.
It will take a little time to get those funds as the transaction clears. You could monitor it on the testnet viewblock.io page for your newly made address. It will tell you once you've gotten your ZIL needed to run the contract deployment  script.
