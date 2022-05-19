import { Dropdown, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export function DropDownConditions({ allColumns, setAllColumns }) {
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
        <Form.Check
          type="checkbox"
          label="Usuário"
          checked={allColumns.includes('name')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns((current) =>
              isChecked
                ? current.concat(['name'])
                : current.filter((colName) => colName !== 'name')
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="E-mail"
          checked={allColumns.includes('email')}
        />
        <Form.Check type="checkbox" label="Cliente" />
        <Form.Check type="checkbox" label="Perfil de Acesso" />
      </Dropdown.Menu>
    </Dropdown>
  );
}
