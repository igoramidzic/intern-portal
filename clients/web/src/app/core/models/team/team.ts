import { IUser } from '../user/user.model';
import { IMessage } from '../message/messages';

export type ITeam = {
    _id?: string;
    name?: string;
    department?: string;
    deactivated?: boolean;
    members?: string[];
    messages?: IMessage[];
    createdAt?: Date;
    updatedAt?: Date;
}