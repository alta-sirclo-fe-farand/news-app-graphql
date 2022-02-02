export type Users = {
  users: UsersType[];
}

export type User = {
  user: UsersType
}

interface UsersType {
  id: number;
  name: string;
  email: string;
  password: string;
}