const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); // Web3 is a constructor function, so we used upper-case
const { interface, bytecode } = require("../compile");
// creating a web3 instance with a provider
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use one of the those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({
      from: accounts[0],
      gas: "1000000",
    });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address); // checks for the existence(not null) of address
  });
});
