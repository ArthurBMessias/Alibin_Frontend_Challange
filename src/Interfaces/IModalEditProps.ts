export default interface IModalEditProps {
    isOpen: boolean;
    onClone: () => void;
    userInfo: any;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}