import axios from 'axios';
import { getCashIn } from '../getCashIn.js';
import { getCashOutLegal } from '../getCashOutLegal.js';
import { getCashOutNatural } from '../getCashOutNatural.js';
import { BASE_URL } from '../../constants/baseUrl.js';

jest.mock('axios');

const responseForLegal = { data: { percents: 0.3, min: { amount: 0.5, currency: 'EUR'}} };
const responseForCashIn = { data: { percents: 0.03, max: { amount: 5, currency: 'EUR'}} };
const responseForNatural = { data: { percents: 0.3, week_limit: { amount: 1000, currency: 'EUR'}} };


describe('get response from cash-in API', () => {
  it('get response from cash-in API', async () => {
  axios.get.mockReturnValue(Promise.resolve(responseForCashIn));

  const getCashInAPI = await getCashIn();

  expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/cash-in`);
  expect(getCashInAPI).toEqual({ cashIn: responseForCashIn.data });
  })
})

describe('get response from cash-out API for legal person', () => {
  it('get response from cash-out API for legal person', async () => {
    axios.get.mockReturnValue(Promise.resolve(responseForLegal));

    const getCashOutLegalAPI = await getCashOutLegal();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/cash-out-juridical`);
    expect(getCashOutLegalAPI).toEqual({ cashOutLegal: responseForLegal.data });
  })
})

describe('get response from cash-out API for natural person', () => {
  it('get response from cash-out API for natural person', async () => {
    axios.get.mockReturnValue(Promise.resolve(responseForNatural));

    const getCashOutNaturalAPI = await getCashOutNatural();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/cash-out-natural`);
    expect(getCashOutNaturalAPI).toEqual({ cashOutNatural: responseForNatural.data });
  })
})
