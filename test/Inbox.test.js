const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); // Web3 is a constructor function, so we used upper-case

// creating a web3 instance with a provider
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  // get a list of all accounts from the ganache local network
  accounts = await web3.eth.getAccounts();

  // use one of the those accounts to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
