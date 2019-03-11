/* eslint-disable global-require */
import { getHotels, client } from './client';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: 'test' })),
  })),
}));

test('axios is configured as expected', () => {
  expect(require('axios').create).toHaveBeenCalledWith({
    baseURL: 'http://localhost:3000/data',
  });
});

test('getHotels() configured to correct end-point', () => {
  getHotels();
  expect(client.get).toHaveBeenCalledWith('/test.json');
});

test('getHotels() extracts the \'data\' key from the response obj', (done) => {
  getHotels().then((data) => {
    expect(data).toBe('test');
    done();
  });
});
