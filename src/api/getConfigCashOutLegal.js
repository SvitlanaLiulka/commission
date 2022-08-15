import axios from 'axios';
import {API_CASH_OUT_LEGAL} from '../constants/urlForAPI.js';

export const getConfigCashOutLegal = async () => {
    try {
        const configAPI = await axios.get(API_CASH_OUT_LEGAL);
        return {cashOutLegal: configAPI.data};
    } catch (err) {
        if (err.status !== 200) {
            console.error(err.message);
            process.exit()
        }
    }
}
