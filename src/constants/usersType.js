import { cashOutCommissionNatural } from '../commission/getCommissionNatural.js';
import { getCommissionCashIn } from '../commission/getCommissionCashIn.js';
import { getCommissionLegal } from '../commission/getCommissionLegal.js';

export const USERS_TYPE = {
    natural: {
        cash_out: cashOutCommissionNatural,
        cash_in: getCommissionCashIn,
    },
    juridical: {
        cash_out: getCommissionLegal,
        cash_in: getCommissionCashIn,
    },
};
