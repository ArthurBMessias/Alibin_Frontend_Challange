import { cleanup, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';

const clientMock = {
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  company: {
    name: 'Romaguera-Crona',
  },
  website: 'hildegard.org',
};

const mockFetch = () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(clientMock),
    })
  );
};

describe('Test component AllUsersList', () => {
  beforeAll(mockFetch);
  beforeEach(cleanup);

  it('fetches a client', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(global.fetch).toHaveBeenCalled();
  });
});
