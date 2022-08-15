import axios from 'axios';
import {getConfigForCashIn} from '../getConfigForCashIn.js';
import {getConfigCashOutLegal} from '../getConfigCashOutLegal.js';
import {getConfigCashOutNatural} from '../getConfigCashOutNatural.js';
import {API_CASH_IN, API_CASH_OUT_LEGAL, API_CASH_OUT_NATURAL} from '../../constants/urlForAPI.js';

jest.mock('axios');

const responseForLegal = {data: {percents: 0.3, min: {amount: 0.5, currency: 'EUR'}}};
const responseForCashIn = {data: {percents: 0.03, max: {amount: 5, currency: 'EUR'}}};
const responseForNatural = {data: {percents: 0.3, week_limit: {amount: 1000, currency: 'EUR'}}};


describe('get response from cash-in API', () => {
    it('get response from cash-in API', async () => {
        axios.get.mockReturnValue(Promise.resolve(responseForCashIn));

        const getCashInAPI = await getConfigForCashIn();

        expect(axios.get).toHaveBeenCalledWith(API_CASH_IN);
        expect(getCashInAPI).toEqual({cashIn: responseForCashIn.data});
    })
})

describe('get response from cash-out API for legal person', () => {
    it('get response from cash-out API for legal person', async () => {
        axios.get.mockReturnValue(Promise.resolve(responseForLegal));

        const getCashOutLegalAPI = await getConfigCashOutLegal();

        expect(axios.get).toHaveBeenCalledWith(API_CASH_OUT_LEGAL);
        expect(getCashOutLegalAPI).toEqual({cashOutLegal: responseForLegal.data});
    })
})

describe('get response from cash-out API for natural person', () => {
    it('get response from cash-out API for natural person', async () => {
        axios.get.mockReturnValue(Promise.resolve(responseForNatural));

        const getCashOutNaturalAPI = await getConfigCashOutNatural();

        expect(axios.get).toHaveBeenCalledWith(API_CASH_OUT_NATURAL);
        expect(getCashOutNaturalAPI).toEqual({cashOutNatural: responseForNatural.data});
    })
})
