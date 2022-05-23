import IUser from './IUser';
import IEditUserProps from './IEditUserProps';

export default interface IUserContextData {
  usersList: IUser[];
  setUsersList: React.Dispatch<any>;
  updateUser: (editedUser: IEditUserProps) => void;
  deleteUser: (id: string) => void;
  name: boolean;
  setName: React.Dispatch<React.SetStateAction<boolean>>;
}
