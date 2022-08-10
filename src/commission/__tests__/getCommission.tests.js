import { getCommissionCashIn } from '../getCommissionCashIn.js';
import { getCommissionCashOutLegal } from '../getCommissionLegal.js';
import { getCommissionCashOutNatural } from '../getCommissionNatural.js';
import { DATA_FROM_API } from '../../constants/geDataFromAPI.js';


describe('get commission for cash-in operation', () => {
  it('get commission for cash-in operation', () => {
    const result = getCommissionCashIn(200, DATA_FROM_API);
    expect(result).toBe('0.06');
  })
})

describe('cash-out commission legal person', () => {
  it('get commission for cash-out operation for legal person', () => {
    const result = getCommissionCashOutLegal(100, DATA_FROM_API);
    expect(result).toBe('0.50');
  })
})

describe('get commission for cash-out for natural person', () => {
  it('get commission for cash-out for natural person', () => {
    const result = getCommissionCashOutNatural(100, DATA_FROM_API, '2022-08-01', 1);
    expect(result).toBe('0.00');
  });

  it('get commission for cash-out for natural person', () => {
    const result = getCommissionCashOutNatural(1000, DATA_FROM_API, '2022-08-02', 1);
    expect(result).toBe('0.30');
  });

  it('get commission for cash-out for natural person', () => {
    const result = getCommissionCashOutNatural(2000, DATA_FROM_API, '2022-08-02', 1);
    expect(result).toBe('6.00');
  });

  it('get commission for cash-out for natural person', () => {
    const result = getCommissionCashOutNatural(10000, DATA_FROM_API, '2022-05-19', 3);
    expect(result).toBe('27.00');
  })
})
