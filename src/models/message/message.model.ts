import mongoose from "mongoose";
import { User } from "../user/user.model";
import { Team } from "../team/team.model";

export type Message = {
    _id?: string;
    message?: string;
    user?: string;
    team?: string;
}

export type MessageDocument = mongoose.Document & {
    message: string;
    user: User;
    team: Team;
};

const messageSchema = new mongoose.Schema({
    message: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    team: { type: mongoose.Types.ObjectId, ref: 'Team', required: true }
}, { timestamps: true });

messageSchema.methods.toJSON = function () {
    const message = this;
    const messageObject = message.toObject();

    return messageObject;
}

export const Message = mongoose.model<MessageDocument>("Message", messageSchema);
