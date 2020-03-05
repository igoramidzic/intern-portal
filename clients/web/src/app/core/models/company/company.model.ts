import { IUser } from '../user/user.model';

export type Company = {
    _id?: string;
    name?: string;
    users?: IUser[];
    createdAt?: Date;
    updatedAt?: Date;
}