import IUser from "./IUser";

export default interface IOnEditProps {
    onEdit: (user: IUser) => void
}