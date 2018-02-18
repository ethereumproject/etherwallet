'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    CLO: "CLO",
    CLOT: "Testnet CLO",
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    PIRL: "PIRL",
    ETSC: "ETSC",
    Custom: "CUSTOM ETH"
};
nodes.tldTypes = {
    ETH: ".eth",
    ETC: ".etc",
    Ropsten: ".eth",
    Kovan: ".eth",
    Rinkeby: ".eth",
    RSK: ".rsk"
}
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten, nodes.nodeTypes.ETC];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};

nodes.alternativeBalance = {
        ETH: {
          balance: "Loading",
          node: "eth_ethscan",
          symbol: "ETH"
        },
        ETC: {
          balance: "Loading",
          node: "etc_epool",
          symbol: "ETC"
        },
        UBQ: {
          balance: "Loading",
          node: "ubq",
          symbol: "UBQ"
        },
        EXP: {
          balance: "Loading",
          node: "exp",
          symbol: "EXP"
        }
    };

nodes.nodeList = {
    'etc_epool': {
        'name': 'ETC',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'service': 'Epool.io',
        'lib': new nodes.customNode('https://mewapi.epool.io', '')
    },
    'clo_testnet': {
        'name': 'CLO Testnet',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.CLOT,
        'eip155': true,
        'chainId': 7919,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'service': 'Callisto.network',
        'lib': new nodes.customNode('https://testnet.callisto.network', '')
    },
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    },
    'eth_ethscan': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscan')
    },
    'eth_infura': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://mainnet.infura.io/mew')
    },
    'rop_mew': {
        'name': 'Ropsten',
        'type': nodes.nodeTypes.Ropsten,
        'blockExplorerTX': 'https://ropsten.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ropsten.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'abiList': require('./abiDefinitions/ropstenAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/rop', '')
    },
    'rop_infura': {
        'name': 'Ropsten',
        'blockExplorerTX': 'https://ropsten.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ropsten.etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.Ropsten,
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'abiList': require('./abiDefinitions/ropstenAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://ropsten.infura.io/mew')
    },
    'kov_ethscan': {
        'name': 'Kovan',
        'type': nodes.nodeTypes.Kovan,
        'blockExplorerTX': 'https://kovan.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://kovan.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 42,
        'tokenList': require('./tokens/kovanTokens.json'),
        'abiList': require('./abiDefinitions/kovanAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscanKov')
    },
    'rin_ethscan': {
        'name': 'Rinkeby',
        'type': nodes.nodeTypes.Rinkeby,
        'blockExplorerTX': 'https://rinkeby.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://rinkeby.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 4,
        'tokenList': require('./tokens/rinkebyTokens.json'),
        'abiList': require('./abiDefinitions/rinkebyAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscanRin')
    },
    'rin_infura': {
        'name': 'Rinkeby',
        'blockExplorerTX': 'https://rinkeby.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://rinkeby.etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.Rinkeby,
        'eip155': true,
        'chainId': 4,
        'tokenList': require('./tokens/rinkebyTokens.json'),
        'abiList': require('./abiDefinitions/rinkebyAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://rinkeby.infura.io/mew')
    },
    'rsk': {
        'name': 'RSK',
        'blockExplorerTX': 'https://explorer.rsk.co/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.rsk.co/addr/[[address]]',
        'type': nodes.nodeTypes.RSK,
        'eip155': true,
        'chainId': 31,
        'tokenList': require('./tokens/rskTokens.json'),
        'abiList': require('./abiDefinitions/rskAbi.json'),
        'estimateGas': true,
        'service': 'GK2.sk',
        'lib': new nodes.customNode('https://rsk-test.gk2.sk/', '')
    },
    'exp': {
        'name': 'EXP',
        'blockExplorerTX': 'http://www.gander.tech/tx/[[txHash]]',
        'blockExplorerAddr': 'http://www.gander.tech/address/[[address]]',
        'type': nodes.nodeTypes.EXP,
        'eip155': true,
        'chainId': 2,
        'tokenList': require('./tokens/expTokens.json'),
        'abiList': require('./abiDefinitions/expAbi.json'),
        'estimateGas': true,
        'service': 'Expanse.tech',
        'lib': new nodes.customNode('https://node.expanse.tech/', '')
    },
    'music_tfarm': {
        'name': 'MUSIC',
        'blockExplorerTX': 'https://orbiter.musicoin.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://orbiter.musicoin.org/addr/[[address]]',
        'type': nodes.nodeTypes.MUS,
        'eip155': false,
        'chainId': 7762959,
        'tokenList': require('./tokens/musicTokens.json'),
        'abiList': require('./abiDefinitions/musicAbi.json'),
        'service': 'trustfarm.io',
        'lib': new nodes.customNode('https://mcdnode.trustfarm.io/api', '')
    },
    'music_twmc': {
        'name': 'MUSIC',
        'blockExplorerTX': 'https://orbiter.musicoin.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://orbiter.musicoin.org/addr/[[address]]',
        'type': nodes.nodeTypes.MUS,
        'eip155': false,
        'chainId': 7762959,
        'tokenList': require('./tokens/musicTokens.json'),
        'abiList': require('./abiDefinitions/musicAbi.json'),
        'service': 'pool.musicoin.tw',
        'lib': new nodes.customNode('https://mewapi.musicoin.tw', '')
    },
    'ubq': {
        'name': 'UBQ',
        'blockExplorerTX': 'https://ubiqscan.io/en/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ubiqscan.io/en/address/[[address]]',
        'type': nodes.nodeTypes.UBQ,
        'eip155': true,
        'chainId': 8,
        'tokenList': require('./tokens/ubqTokens.json'),
        'abiList': require('./abiDefinitions/ubqAbi.json'),
        'estimateGas': true,
        'service': 'ubiqscan.io',
        'lib': new nodes.customNode('https://rpc1.ubiqscan.io', '')
    },
    'pirl': {
        'name': 'PIRL',
        'blockExplorerTX': 'https://pirl.site/tx/[[txHash]]',
        'blockExplorerAddr': 'https://pirl.site/addr/[[address]]',
        'type': nodes.nodeTypes.PIRL,
        'eip155': true,
        'chainId': 3125659152,
        'tokenList': require('./tokens/pirlTokens.json'),
        'abiList': require('./abiDefinitions/pirlAbi.json'),
        'estimateGas': true,
        'service': 'pirl.io',
        'lib': new nodes.customNode('https://wallrpc.pirl.io', '')
    },
    'etsc': {
        'name': 'ETSC',
        'blockExplorerTX': 'https://explorer.ethereumsocial.kr/#/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.ethereumsocial.kr/#/address/[[address]]',
        'type': nodes.nodeTypes.ETSC,
        'eip155': true,
        'chainId': 214,
        'tokenList': require('./tokens/etscTokens.json'),
        'abiList': require('./abiDefinitions/etscAbi.json'),
        'estimateGas': true,
        'service': 'gazua.tv',
        'lib': new nodes.customNode('https://node.ethereumsocial.kr', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
