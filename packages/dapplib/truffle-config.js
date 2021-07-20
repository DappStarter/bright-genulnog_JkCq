require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift recipe noble solid hockey inflict supply gesture'; 
let testAccounts = [
"0x9093d5ad338891e6ffbb84acb33a603241b0f2f7f659b570598c3fa93f1b825d",
"0xa884a802e83128d2301ca74d06561b9d3b725cab1fbaf3f87eeb77f530cea4a4",
"0xab5593282b60ac7112c68ccce1cab3e19cb907c5844d4043bd607ddaa59d696d",
"0xea6270d457a7dfce5000c5da2ed51f54f62620ba3cc8b64a36b0aec1184407d0",
"0xe2fb04e66d5a570a2dc4e3ea1d79132cd58e00e02ffbd950e844124f6803b8b5",
"0xb7b3e3aa83f0bbaf700aaebce4394eeb65ba346dc84b7ef2927e66a616860fdc",
"0xcf639e3d27530bdf278465aeeb9ffc60bdf6dea26ecad2cad3f6e4a16b047bde",
"0x10654e04d605d5ba4cc1dd5e7e40e2b1e6485fd3ab3347d688d52cdeedd3bb7d",
"0x012f4eadc29c4314af3000bd2b4ad078a029be3d338e3de343f989e394b9cb75",
"0x5b119cae96a580f0a47257445da5ee434f4e3d10d3cadf1d76d2c2dc334e5241"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


