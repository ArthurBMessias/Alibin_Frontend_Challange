import User from '../hooks/useFetchUsersTable';

export default interface IFormModalProps {
  userInfo: User;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
