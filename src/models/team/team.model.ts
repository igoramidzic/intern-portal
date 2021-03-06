import mongoose from "mongoose";
import { UserDocument, User } from "../user/user.model";
import { MessageDocument, Message } from "../message/message.model";

export type Team = {
    _id?: string;
    name?: string;
    members?: User[];
    messages?: Message[];
    company?: string;

    deactivated?: boolean;
    department?: string;
}

export type TeamDocument = mongoose.Document & {
    name: string;
    members: UserDocument[];
    messages: MessageDocument[];
    company: mongoose.Types.ObjectId;

    deactivated?: boolean;
    department?: string;
};

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: false },
    deactivated: { type: Boolean, required: false },
    company: { type: mongoose.Types.ObjectId, ref: 'Company', required: false },
    members: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Types.ObjectId, ref: 'Message' }]
}, { timestamps: true });

teamSchema.methods.toJSON = function () {
    const team = this;
    const teamObject = team.toObject();

    return teamObject;
}

export const Team = mongoose.model<TeamDocument>("Team", teamSchema);
