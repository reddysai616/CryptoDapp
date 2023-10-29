require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    AvalancheFujiTestnet: {
    url:'https://avalanche-fuji.infura.io/v3/9c0ea514ddc040059a5426506c2f12ed',
    accounts:[`b88e8c843039c42814a9b3a24911b6d26f0458a7169254030a44c74207008ffb`]
  }
}
};
