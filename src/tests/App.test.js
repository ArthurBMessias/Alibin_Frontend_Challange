import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test component App.js', () => {
  it('Collumn name "USUÁRIO" is rendering on page', () => {
    render(<App />);
    const userCollumn = screen.getByText(/usuário/i);
    expect(userCollumn).toBeInTheDocument();
  });
  it('Collumn name "EMAIL" is rendering on page', () => {
    render(<App />);
    const emailCollumn = screen.getByText(/email/i);
    expect(emailCollumn).toBeInTheDocument();
  });
  it('Collumn name "CLIENTE" is rendering on page', () => {
    render(<App />);
    const clientCollumn = screen.getByText(/cliente/i);
    expect(clientCollumn).toBeInTheDocument();
  });
  it('Collumn name "PERFIL DE ACESSO" is rendering on page', () => {
    render(<App />);
    const perfilCollumn = screen.getByText(/perfil/i);
    expect(perfilCollumn).toBeInTheDocument();
  });
});
