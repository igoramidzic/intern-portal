import { IUser } from '../user/user.model';

export type ITeam = {
    _id?: string;
    name?: string;
    department?: string;
    deactivated?: boolean;
    members?: IUser[];
    createdAt?: Date;
    updatedAt?: Date;
}