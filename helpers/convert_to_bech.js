//0x501A70ffEAA3F31C1caccE3479e74713546BAA44
const fs = require('fs');
const {Long, bytes, units} = require('@zilliqa-js/util');
const {Zilliqa} = require('@zilliqa-js/zilliqa');
const {toBech32Address} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');


async function main() {
    var pubk = process.argv[2]
    console.log("your zilkey")
    console.log(`${pubk}`)
    const nonbechAddr = toBech32Address(pubk)
    console.log("Your account address is:");
    console.log(`${nonbechAddr}`);

    }
    main();