import { getHotels, client } from './client';

jest.mock('axios', () => {
  const instanceMock = jest.fn();
  instanceMock.mockReturnValue({
    get: jest.fn(),
  });
  return {
    create: instanceMock,
  };
});

test('axios is configured as expected', () => {
  expect(require('axios').create).toHaveBeenCalledWith({
    baseURL: 'http://localhost:3000/data',
  });
});

test('getHotels() configured to correct end-point', () => {
  getHotels();
  expect(client.get).toHaveBeenCalledWith('/test.json');
});
