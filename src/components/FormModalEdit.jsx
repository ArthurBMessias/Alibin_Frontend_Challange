import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useFetchUsersTable } from '../hooks/useFetchUsersTable';

export function FormModalEdit({ userInfo }) {
  const [name, setName] = useState(userInfo?.name || '');
  const [email, setEmail] = useState(userInfo?.email || '');
  const [companyName, setCompanyName] = useState(userInfo?.company.name || '');
  const [website, setWebSite] = useState(userInfo?.website || '');

  // const { usersList, setUsersList, updateUser } = useFetchUsersTable();
  
  function handleEditUserInfo(event) {
    event.preventDefault();
    
  }

  return (
    <Form onSubmit={ handleEditUserInfo }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          USUÁRIO
        </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Editar Usuário" 
          value={ name }
          onChange={ (event) => setName(event.target.value)} 
        />
        <Form.Label>
          EMAIL
        </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Editar email" 
          value={ email }
          onChange={(event) => setEmail(event.target.value)} 
        />
        <Form.Label>
          CLIENTE
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Cliente"
          value={ companyName }
          onChange={(event) => setCompanyName(event.target.value)}
        />
        <Form.Label>
          PERFIL DE ACESSO
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Perfil de Acesso"
          value={ website }
          onChange={(event) => setWebSite(event.target.value)}
        />
      </Form.Group>
      <div className="d-grid gap-2" style={{ padding: '15px'}}>
        <Button type="submit">
          Salvar Alterações
        </Button>
      </div>
    </Form>
  );
}
