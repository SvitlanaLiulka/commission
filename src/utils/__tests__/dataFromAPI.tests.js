import { dataFromAPI } from '../dataFromAPI.js';
import { DATA_FROM_API } from '../../constants/dataFromAPI.js';

describe('get data', () => {
  it('get all data from API', async () => {
    const result = await dataFromAPI();
    expect(result).toEqual(DATA_FROM_API);
  })
})
