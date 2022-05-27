import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const url = 'https://jsonplaceholder.typicode.com/users';

// rest é responsável para fornecer a informação para o server
// url é o primeiro parametro que recebe a url da API
const apiResponse = rest.get(url, (_req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        name: 'Bruce Wayne',
        email: 'Batman@gmail.com',
        website: 'waynecorporation.com',
        company: {
          name: 'Wayne-Corp',
        },
      },
    ])
  );
});

//intercepta o 'request' da api e voltar informações diferentes quando o teste rodar
const server = new setupServer(apiResponse);

// antes de rodar o teste
beforeAll(() => server.listen());
// depois de cada teste reseta
afterEach(() => server.resetHandlers());
// depois de cada teste
afterAll(() => server.close());

describe('Test component ModalEdit', () => {
  it('should have a button', async () => {
    render(<App />);
    const editButtonMock = await screen.findByTestId('edit-button');
    expect(editButtonMock).toBeVisible();
  });
  it('On click opens the modal', async () => {
    render(<App />);
    const editButtonMock = await screen.findByTestId('edit-button');
    userEvent.click(editButtonMock);
    expect(screen.getByText('Editar Dados do Cliente')).toBeInTheDocument()

  })
});
