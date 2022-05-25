import IUser from './IUser';
import IEditUserProps from './IEditUserProps';

export default interface IUserContextData {
  usersList: IUser[];
  allCollumns: string[];
  setUsersList: React.Dispatch<any>;
  setAllCollumns: React.Dispatch<any>;
  updateUser: (editedUser: IEditUserProps) => void;
  isUserChecked: boolean;
  deleteUser: (id: string) => void;
  filterColumn: (isChecked: boolean) => void;
  name: boolean;
  setName: React.Dispatch<React.SetStateAction<boolean>>;
}
