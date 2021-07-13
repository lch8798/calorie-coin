const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

const NETWORK = {
  BAOBAB: {
    ID: "1001",
    NODE: "https://api.baobab.klaytn.net:8651",
  },
  CYPRESS: {
    ID: "8217",
    NODE: "",
  },
};

const OWNER = {
  PK: "0x003634eed4ec22d4eaa356416bf15a760eaf40765e070bd8ecfa3ba94ceaeea3", // is owner klaytn wallet private key
};

module.exports = {
  networks: {
    baobab: {
      provider: () => {
        return new HDWalletProvider(OWNER.PK, NETWORK.BAOBAB.NODE);
      },
      network_id: NETWORK.BAOBAB.ID,
      gas: "8500000",
      gasPrice: null,
    },
    cypress: {
      provider: () => {
        return new HDWalletProvider(OWNER.PK, NETWORK.CYPRESS.NODE);
      },
      network_id: NETWORK.CYPRESS.ID,
      gas: "8500000",
      gasPrice: null,
    },
  },

  compilers: {
    solc: {
      version: "0.5.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "constantinople",
      },
    },
  },
};
