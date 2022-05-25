// import "whatwg-fetch"
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
// import { useFetchUsersTable } from "../hooks/useFetchUsersTable"

// const clientMock = {
//   name: 'Leanne Graham',
//   email: 'Sincere@april.biz',
//   company: {
//     name: 'Romaguera-Crona',
//   },
//   website: 'hildegard.org',
// };

// const server = setupServer(rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
//   return res(
//     ctx.status(200), ctx.json(clientMock))
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());


// describe('Test component AllUsersList', () => {
//     it('fetches a client', async () => {
// const client = await useFetchUsersTable();
// expect(client).toEqual(clientMock)
//     });
//   });



// import { cleanup, render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import App from '../App';

// const clientMock = {
//   name: 'Leanne Graham',
//   email: 'Sincere@april.biz',
//   company: {
//     name: 'Romaguera-Crona',
//   },
//   website: 'hildegard.org',
// };

// const mockFetch = () => {
//   jest.spyOn(global, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//       status: 200,
//       ok: true,
//       json: () => Promise.resolve(clientMock),
//     })
//   );
// };

// describe('Test component AllUsersList', () => {
//   beforeAll(mockFetch);
//   beforeEach(cleanup);

//   it('fetches a client', async () => {
//     await act(async () => {
//       render(<App />);
//     });
//     expect(global.fetch).toHaveBeenCalled();
//   });
// });
