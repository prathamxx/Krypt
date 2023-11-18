require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gbArOskSgch_au47isIlHSVhecXY0fzj',
      accounts: ['a99512ab2b63f2fa204187e375e8c6b9ef6d351de716bc39525901de01727c9d'],
    },
  },
};