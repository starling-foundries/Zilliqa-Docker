const fs = require('fs');
const {Long, bytes, units} = require('@zilliqa-js/util');
const {Zilliqa} = require('@zilliqa-js/zilliqa');
const {fromBech32Address, getAddressFromPrivateKey} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');


async function main() {
    var pkey= process.argv[2]
    console.log("your pkey")
    console.log(`${pkey}`)

    zilliqa.wallet.addByPrivateKey(
       pkey 
    );
    const address = getAddressFromPrivateKey(pkey);

    console.log("Your account address is:");
    console.log(`${address}`);

    }
    main();
