import Eos from 'eosjs';
import network from './config';

export default Eos({
    httpEndpoint: `${network.eosConfig['protocol']}://${network.eosConfig['host']}:${network.eosConfig['port']}`,
    chainId: network.eosConfig['chainId']
}); 
