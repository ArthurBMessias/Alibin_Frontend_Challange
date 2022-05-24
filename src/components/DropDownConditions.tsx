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
        <Form.Check type="checkbox" label="Padrão" checked={true} />
        <Form.Check type="checkbox" label="5 Linhas" defaultChecked={false} />
        <>Colunas</>
        <Form.Check
          type="checkbox"
          label="Usuário"
          defaultChecked={false}
        />
        <Form.Check
          type="checkbox"
          label="E-mail"
          defaultChecked={false}
        />
        <Form.Check
          type="checkbox"
          label="Cliente"
          defaultChecked={false}
        />
        <Form.Check
          type="checkbox"
          label="Perfil de Acesso"
          defaultChecked={false}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}
