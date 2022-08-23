import { getConfigFromAPI } from '../getConfigFromAPI.js';
import { DATA_FROM_API } from '../../constants/geDataFromAPI.js';

describe('get data', () => {
  it('get all data from API', async () => {
    const result = await getConfigFromAPI();
    expect(result).toEqual(DATA_FROM_API);
  });
});
