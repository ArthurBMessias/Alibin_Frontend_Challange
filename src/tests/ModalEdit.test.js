import { cleanup, render, screen } from '@testing-library/react';
import AllUsersList from '../components/AllUsersList'

describe('Test component ModalEdit', () => {

  it('Renders "Editar Dados do Cliente" on modal screen', async () => {
    render(<AllUsersList />)
    const editButton =  screen.getByRole('button')
    expect(editButton).toBeInTheDocument()
      

  });
});
