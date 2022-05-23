export default interface IUser {
  id: string;
  name: string;
  email: string;
  company: {
    name: string;
  };
  website: string;
}
