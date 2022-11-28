import { AddressLiteral } from 'everscale-inpage-provider'

import { NetworkShape } from '@/types'


export const networks: NetworkShape[] = [
    {
        chainId: '1',
        currencySymbol: 'dEVER',
        explorerBaseUrl: 'https://testnet.everscan.io',
        id: 'everscale-1',
        label: 'Everscale testnet',
        name: 'Everscale testnet',
        rpcUrl: '',
        type: 'everscale',
    },
    {
        chainId: '11155111',
        currencySymbol: 'SETH',
        explorerBaseUrl: 'https://sepolia.etherscan.io/',
        id: 'evm-1',
        label: 'Ethereum',
        name: 'Ethereum Sepolia',
        rpcUrl: 'https://rpc.sepolia.dev/',
        transactionType: '0x2',
        type: 'evm',
    },
]

export const AirdropContractAddress = new AddressLiteral('0:b321058503889a78fe0954cfb67564b218cff1eac1467dc48e4c80118dd6719f')

export const DexRootAddress = new AddressLiteral('')

export const WEVERRootAddress = new AddressLiteral('')

export const CreditBody = '5800000000'

export const EmptyWalletMinEversAmount = '10000000000'

export const CreditFactoryAddress = new AddressLiteral('0:5ae128e08b2c17428629e092c1a7bd5c77a83a27fa3b833a31c2eb3d704d7f68')

export const DepositToFactoryMaxSlippage = 10

export const DepositToFactoryMinSlippageNumerator = '1'

export const DepositToFactoryMinSlippageDenominator = '100'

export const GasToStaking = '11500000000'

export const GasToCastVote = '11500000000'

export const MinGasToUnlockCastedVotes = '11000000000'

export const GasToUnlockCastedVote = '200000000'

export const HiddenBridgeStrategyGas = '2500000000'

export const HiddenBridgeStrategyFactory = new AddressLiteral('0:18e1dfffa7c13122c993c94b205b68905c14b77ce03d3cbcb1fd6f52664fbf2d')

export const RelayEvmNetworkChainId = '11155111'

export const StakingAccountAddress = new AddressLiteral('0:3ec17795207f3d91397702267594a9178529eb547f5818658da22a5829069638')

export const DaoRootContractAddress = new AddressLiteral('0:82e9951eceb1f4789c31d924e17d30fba5fddf0f1b1c7978f91411de7d346343')

export const AlienTokenListURI = 'https://raw.githubusercontent.com/broxus/bridge-assets/multitoken-1/tokenlist/common.json'

export const BridgeAssetsURI = 'https://raw.githubusercontent.com/broxus/bridge-assets/multitoken-1/tokenlist/octus.json'

export const TokenAssetsURI = 'https://raw.githubusercontent.com/broxus/bridge-assets/master/main.json'

export const TokenListURI = 'https://raw.githubusercontent.com/broxus/ton-assets/master/manifest.json'

export const UpgradeTokenListURI = 'https://raw.githubusercontent.com/broxus/everscale-assets-upgrade/master/main.json'

export const Web3Url = 'https://rpc.sepolia.dev/'

export const IndexerApiBaseUrl = 'https://api.octusbridge.io/v1'

export const DaoIndexerApiBaseUrl = 'https://dao.octusbridge.io/v1'

export const TonSwapIndexerApiBaseUrl = 'https://api.flatqube.io/v1'
