require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hover enrich sun food pledge rice sadness attend install define army gas'; 
let testAccounts = [
"0xcf2891b89459a120948ce27678252d885734999f424800d9eb444fd45880b826",
"0xf32e2f594438aeb3fdcb2f98ecc63baf8ac5020e9921eace36b7e86a116b2a06",
"0x0fec3d697188b00c22726caf889c3f1b09fe0db26135ed1a8ead7ad0a295120d",
"0x0250ef0035cda50cb7caa2da1687970c8a6e70b3d5d902a22399408634716927",
"0xc86f9c23d6be7af76ec4bf7f55a88631919fb1661d9cc64129e7dd35895f733d",
"0x35c4965f78da1bcd9bc2bc88a9685fd3011ea37be7bef4bf8c429bfd9fe4f735",
"0x0d55118e7e56c90084ed0deae41cf37e4dcf735a4a6be2020a2e2bb9138969dc",
"0xe53838bac15e5b31cc0efde70b293dd77ee0fc7bf3909f0571026e57ba84f8b6",
"0x6687f91b72d414621c3ebbd4ba38d1901d34b940ed85c0ca74ef6a60ba0f33d8",
"0x7d34e16614ca4bd1ec0704d93efd8776153bfca080b4ece73b82c2792fc9d246"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

