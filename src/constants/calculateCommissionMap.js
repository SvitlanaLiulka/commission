import { getCommissionCashOutNatural} from '../commission/getCommissionNatural.js';
import { getCommissionCashIn } from '../commission/getCommissionCashIn.js';
import { getCommissionCashOutLegal } from '../commission/getCommissionLegal.js';

export const CALCULATE_COMMISSION_MAP = {
  natural: {
    cash_out: getCommissionCashOutNatural,
    cash_in: getCommissionCashIn,
  },
  juridical: {
    cash_out: getCommissionCashOutLegal,
    cash_in: getCommissionCashIn,
  },
};
