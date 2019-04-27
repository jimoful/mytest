const url = new URL(location.href);

const isTest = url.searchParams.get('test');
export default {
    appName: "FairParty",
    mainToken: "EOS", // 主网代币，永远是EOS, 不会变
    gameToken: "A",
    eosContract: "eosio.token",
    gameTokenContract: "fairpartyeco",
    gameContract: "mybet",
    auctionContract: "auction",

    version: "1.1",
    env: 'dev',
    // local testnet
    eosNetwork: {
        blockchain: 'eos',
        // host: '192.168.1.6',
        host: '106.14.192.176',
        port: 8888,
        chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
        protocol: "http"
    },

    // mainnet
    // eosConfig: {
    //     blockchain: 'eos',
    //     host: isTest ? '//api-kylin.eosasia.one' : 'eos.greymass.com',
    //     port: 80,
    //     protocol: 'http',
    //     chainId: isTest ? '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191' : 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    //
    // },
    //
    eosConfig: {
        blockchain: 'eos',
        host: '106.14.192.176',
        port: 8888,
        chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
        protocol: "http"
    },

}


