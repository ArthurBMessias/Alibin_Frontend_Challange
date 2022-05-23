import  User  from '../hooks/useFetchUsersTable'

export default interface IOnEditProps {
    onEdit: (user: User) => void
}