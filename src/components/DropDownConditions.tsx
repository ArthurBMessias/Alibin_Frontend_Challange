import { Dropdown, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';

export function DropDownConditions() {
  const { allCollumns, setAllCollumns, setIsFiveRowsChecked } =
    useFetchUsersTable();
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <BiDotsVerticalRounded />
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ padding: '15px' }}>
        <>Linhas por página</>
        <br></br>
        <Form.Check type="checkbox" label="Padrão" checked={true} />
        <Form.Check
          type="checkbox"
          label="5 Linhas"
          defaultChecked={false}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setIsFiveRowsChecked(isChecked);
          }}
        />
        <hr />
        <>Colunas</>
        <Form.Check
          type="checkbox"
          label="Usuário"
          defaultChecked={allCollumns.includes('name')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.concat(['name'])
                : current.filter((colName: any) => colName !== 'name')
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="E-mail"
          defaultChecked={allCollumns.includes('email')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.concat(['email'])
                : current.filter((colName: any) => colName !== 'email')
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="Cliente"
          defaultChecked={allCollumns.includes('client')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.concat(['client'])
                : current.filter((colName: any) => colName !== 'client')
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="Perfil de Acesso"
          defaultChecked={allCollumns.includes('perfil')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.concat(['perfil'])
                : current.filter((colName: any) => colName !== 'perfil')
            );
          }}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}
