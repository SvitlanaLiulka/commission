import { getPercent } from '../getPersent.js';

describe('get percent from value', () => {
  it('get percent from value', () => {
    const percent = getPercent(3500, 0.03);
    expect(percent).toBe(1.05);
  })
})
