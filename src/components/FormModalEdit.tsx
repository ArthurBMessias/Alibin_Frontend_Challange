import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';
import { IUser } from '../hooks/useFetchUsersTable';

interface IFormModalProps {
  userInfo: IUser;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FormModalEdit({ userInfo, setIsModalOpen }: IFormModalProps) {
  const [name, setName] = useState(userInfo?.name || '');
  const [email, setEmail] = useState(userInfo?.email || '');
  const [companyName, setCompanyName] = useState(userInfo?.company.name || '');
  const [website, setWebSite] = useState(userInfo?.website || '');
  const { updateUser } = useFetchUsersTable();

  function handleEditUserInfo() {
    const editedUser = {
      id: userInfo.id,
      name,
      email,
      companyName,
      website,
    };
    updateUser(editedUser);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>USUÁRIO</Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Usuário"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Label>CLIENTE</Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Cliente"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
        <Form.Label>PERFIL DE ACESSO</Form.Label>
        <Form.Control
          type="text"
          placeholder="Editar Perfil de Acesso"
          value={website}
          onChange={(event) => setWebSite(event.target.value)}
        />
      </Form.Group>
      <div className="d-grid gap-2" style={{ padding: '15px' }}>
        <Button
          onClick={() => {
            handleEditUserInfo();
            setIsModalOpen(false);
          }}
        >
          Salvar Alterações
        </Button>
      </div>
    </Form>
  );
}
