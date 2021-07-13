const kip7 = artifacts.require("KIP7Token");
const fs = require("fs");

const CALORIE_COIN_INFO = [
  "Calorie Coin", // name
  "CRC", // symbol
  6, // token decimals
  "100000000000000000000", // initial supply
];

module.exports = function (deployer) {
  deployer.deploy(kip7, ...CALORIE_COIN_INFO).then(() => {
    if (kip7._json) {
      fs.writeFile("deployedABI", JSON.stringify(kip7._json.abi, 2), (err) => {
        if (err) throw err;
        console.log(
          `The abi of ${kip7._json.contractName} is recorded on deployedABI file`
        );
      });
    }

    fs.writeFile("deployedAddress", kip7.address, (err) => {
      if (err) throw err;
      console.log(
        `The deployed contract address * ${kip7.address} * is recorded on deployedAddress file`
      );
    });
  });
};
