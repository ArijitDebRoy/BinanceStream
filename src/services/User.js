import axios from 'axios';
import env from '../env'

const UserService = {

    getListenKey() {
        const config = {
            headers: {
                'accept': "*/*",
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-MBX-APIKEY': `${env.API_KEY}`,
            },
        };
        return axios.post(`${env.BINANCE_API}/api/v1/userDataStream`, null, config)
            .then(res => res.data)
            .catch(error => error);
    }

};

export default UserService;