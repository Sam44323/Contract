const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// configuring a custom provider for connecting to an external API and unlocking an account for deploy
const provider = new HDWalletProvider(
  "void atom chimney where army mystery garage must tiny swear release recall",
  "https://rinkeby.infura.io/v3/c65de9dd9e6a4d2cb17c756fb3f6a446"
);

const web3 = new Web3(provider);
