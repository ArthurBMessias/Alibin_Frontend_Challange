export default interface IModalEditProps {
    isOpen: boolean;
    onClose: () => void;
    userInfo: any;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}