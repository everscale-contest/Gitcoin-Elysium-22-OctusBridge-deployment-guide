module.exports = {
  compiler: {
    path: '/home/antonix/Everscale/octusbridge-contracts/everscale/solc',
  },
  linker: {
    path: '/home/antonix/Everscale/octusbridge-contracts/everscale/tvm_linker',
  },
  networks: {
    dev: {
      ton_client: {
        network: {
          server_address: 'https://devnet.evercloud.dev/b2a112ed0896417d8e4e5550450626ae/',
        },
      },
      giver: {
        address: '0:10895c22eae3f4a9c9b0cb38af88052836afe9b393e53e7d3002bdea7484ae5b',
        abi: {
          "ABI version": 2,
          "header": ["pubkey", "time", "expire"],
          "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
            "name": "sendGrams",
            "inputs": [{"name": "dest", "type": "address"}, {"name": "amount", "type": "uint64"}],
            "outputs": []
          }, {"name": "owner", "inputs": [], "outputs": [{"name": "owner", "type": "uint256"}]}],
          "data": [{"key": 1, "name": "owner", "type": "uint256"}],
          "events": []
        },
        key: process.env.DEV_GIVER_KEY,
      },
      keys: {
        phrase: 'grief merit they car curious surround carbon cube disorder sight chronic glance',
        amount: 5,
      }
    },
  },
};
