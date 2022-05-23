import { Dropdown, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export function DropDownConditions({
  allColumns,
  setAllColumns,
  usersList,
  setUsersList,
  standard,
  setStandard,
  filterColumn,
  apiList,
}) {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <BiDotsVerticalRounded />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <>Linhas por página</>
        <Form.Check
          type="checkbox"
          label="Padrão"
          checked={standard}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setUsersList(prevState => 
            isChecked
            ? usersList.slice(10)
            : console.log(prevState)
            )
            setStandard(!standard)
          }}
        />
        <Form.Check
          type="checkbox"
          label="5 Linhas"
          checked={false}
          onChange={(e) => {
            setStandard(!standard);
            const isChecked = e.target.checked;
            setUsersList(() =>
              isChecked ? usersList.splice(0, 5) : usersList
            );
          }}
        />
        {/* <>Colunas</>
        <Form.Check
          type="checkbox"
          label="Usuário"
          defaultChecked={false}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns(
              (current) => current.filter((colName) => colName === 'name')
              // : current.concat(['name', 'email', 'client', 'perfil'])
            );
            setStandard(!standard);
          }}
        />
        <Form.Check
          type="checkbox"
          label="E-mail"
          defaultChecked={false}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns(
              (current) => current.filter((colName) => colName === 'email')
              // : current.concat(['name', 'email', 'client', 'perfil'])
            );
            setStandard(!standard);
          }}
        />
        <Form.Check
          type="checkbox"
          label="Cliente"
          defaultChecked={false}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns((current) =>
              // ? current.concat(['client'])
              current.filter((colName) => colName === 'client')
            );
            setStandard(!standard);
          }}
        />
        <Form.Check
          type="checkbox"
          label="Perfil de Acesso"
          defaultChecked={false}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setAllColumns((current) =>
              //  current.concat(['perfil'])
              current.filter((colName) => colName === 'perfil')
            );
            setStandard(!standard);
          }} */}
        {/* /> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}
