import { getCommissionCashIn } from '../getCommissionCashIn.js';
import { getCommissionLegal } from '../getCommissionLegal.js';
import { cashOutCommissionNatural } from '../getCommissionNatural.js';
import { DATA_FROM_API } from '../../constants/dataFromAPI.js';

const logShy = jest.spyOn(console, 'log');

describe('get commission for cash-in operation', () => {
  it('get commission for cash-in operation', () => {
    const result = getCommissionCashIn(200000, DATA_FROM_API);
    expect(result).toBe('5.00');
  })
})

describe('cash-out commission legal person', () => {
  it('get commission for cash-out operation for legal person', () => {
    const result = getCommissionLegal(100, DATA_FROM_API);
    expect(result).toBe('0.50');
  })
})

describe('get commission for cash-out for natural person', () => {
  it('get commission for cash-out for natural person', () => {
    cashOutCommissionNatural(19000, DATA_FROM_API, '2022-08-01', 1);
    expect(logShy).toHaveBeenCalledWith('54.00');
  });

  it('get commission for cash-out for natural person', () => {
    cashOutCommissionNatural(200, DATA_FROM_API, '2022-08-02', 1);
    expect(logShy).toHaveBeenCalledWith('0.60');
  });

  it('get commission for cash-out for natural person', () => {
    cashOutCommissionNatural(1000, DATA_FROM_API, '2022-05-19', 3);
    expect(logShy).toHaveBeenCalledWith('0.00');
  })
})
