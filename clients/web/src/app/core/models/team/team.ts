import { IUser } from '../user/user.model';

export type ITeam = {
    _id?: string;
    name?: string;
    department?: string;
    deactivated?: boolean;
    members?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}