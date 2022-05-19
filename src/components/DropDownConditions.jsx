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
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns((current) =>
              isChecked
                ? current.concat(['email'])
                : current.filter((colName) => colName !== 'email')
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="Cliente"
          checked={allColumns.includes('client')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns((current) =>
              isChecked
                ? current.concat(['client'])
                : current.filter((colName) => colName !== 'client')
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="Perfil de Acesso"
          checked={allColumns.includes('perfil')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns((current) =>
              isChecked
                ? current.concat(['perfil'])
                : current.filter((colName) => colName !== 'perfil')
            );
          }}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}
