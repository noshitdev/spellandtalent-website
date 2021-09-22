const config = process.env.PRODUCTION ? require('data/contract/mainnet.json') : require('data/contract/rinkeby.json')

export const QUICK_LINKS = [
  {
    name: 'OpenSea',
    url: 'https://opensea.io/collection/spellandtalent',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/SpellTalentNFT',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/VVRkQrmdkb',
  },
  {
    name: 'Contract',
    url: `https://${process.env.PRODUCTION ? '' : process.env.CHAIN_NAME + '.'}etherscan.io/address/${config.contractAddr}`,
  },
]
