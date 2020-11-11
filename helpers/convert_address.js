const fs = require('fs');
const {Long, bytes, units} = require('@zilliqa-js/util');
const {Zilliqa} = require('@zilliqa-js/zilliqa');
const {fromBech32Address} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');


async function main() {
    var bech32_pub = process.argv[2]
    console.log("your zilkey")
    console.log(`${bech32_pub}`)
    const nonbechAddr = fromBech32Address(bech32_pub)
    console.log("Your account address is:");
    console.log(`${nonbechAddr}`);

    }
    main();