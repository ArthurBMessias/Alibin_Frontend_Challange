import { Dropdown, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export function DropDownConditions() {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <BiDotsVerticalRounded />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <>Linhas por página</>
          <Form.Check type="checkbox" label="Padrão" />
          <Form.Check type="checkbox" label="5 Linhas" />
        <>Colunas</>
          <Form.Check type="checkbox" label="Usuário" />
          <Form.Check type="checkbox" label="E-mail" />
          <Form.Check type="checkbox" label="Cliente" />
          <Form.Check type="checkbox" label="Perfil de Acesso" />
      </Dropdown.Menu>
    </Dropdown>
  );
}
