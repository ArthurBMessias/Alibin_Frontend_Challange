import { Dropdown, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';

export function DropDownConditions() {
  const { allCollumns, setAllCollumns, setIsFiveRowsChecked } = useFetchUsersTable();
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <BiDotsVerticalRounded />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <>Linhas por página</>
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
        <>Colunas</>
        <Form.Check
          type="checkbox"
          label="Usuário"
          defaultChecked={!allCollumns.includes('name')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.filter((collName: any) => collName === 'name')
                : current.concat(['client', 'email', 'perfil'])
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="E-mail"
          defaultChecked={!allCollumns.includes('email')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.filter((collName: any) => collName === 'email')
                : current.concat(['client', 'name', 'perfil'])
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="Cliente"
          defaultChecked={!allCollumns.includes('client')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.filter((collName: any) => collName === 'client')
                : current.concat(['name', 'email', 'perfil'])
            );
          }}
        />
        <Form.Check
          type="checkbox"
          label="Perfil de Acesso"
          defaultChecked={!allCollumns.includes('perfil')}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllCollumns((current: any) =>
              isChecked
                ? current.filter((collName: any) => collName === 'perfil')
                : current.concat(['client', 'email', 'name'])
            );
          }}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}
