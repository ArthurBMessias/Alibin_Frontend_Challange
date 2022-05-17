import { useState } from 'react';
import { Form } from 'react-bootstrap';

export function FormModalEdit() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [website, setWebSite] = useState();
  
  function handleSubmit() {

  }

 

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>USUÁRIO</Form.Label>
        <Form.Control type="text" placeholder="Editar Usuário" value={name} />
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="text" placeholder="Editar email" value={email} />
        <Form.Label>CLIENTE</Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Cliente"
          value={companyName}
        />
        <Form.Label>PERFIL DE ACESSO</Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Perfil de Acesso"
          value={website}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirma Alterações ?" />
      </Form.Group>
    </Form>
  );
}
