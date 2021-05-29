/*
We are using path instead of require, as require instantly reads the code and as here, we are javascript, if we require sol codes then we will get an error
*/

const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf-8");

// code for compiling solidity codes

module.exports = solc.compile(source, 1).contracts[":Inbox"]; // exporting only the Inbox key value from the data
