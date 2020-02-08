import { User } from '../user/user.model';

export type Company = {
    _id: string;
    name: string;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}