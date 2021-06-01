const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// configuring a custom provider for connecting to an external API and unlocking an account for deploy
const provider = new HDWalletProvider(
  "void atom chimney where army mystery garage must tiny swear release recall",
  "https://rinkeby.infura.io/v3/c65de9dd9e6a4d2cb17c756fb3f6a446"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from the account, ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({
      from: accounts[0],
      gas: "1000000",
    });

  console.log("Contract deployed to, ", result.options.address);
};

deploy();
