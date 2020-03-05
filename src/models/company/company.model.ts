import mongoose from "mongoose";
import { UserDocument, User } from "../user/user.model";
import { TeamDocument } from "../team/team.model";

export type Company = {
    name?: string,
    users?: User[]
}

export type CompanyDocument = mongoose.Document & {
    name: string;
    users: UserDocument[];
};

const companySchema = new mongoose.Schema({
    name: { type: String },
    users: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

companySchema.methods.toJSON = function () {
    const company = this;
    const companyObject = company.toObject();

    delete companyObject.users;

    return companyObject;
}

export const Company = mongoose.model<CompanyDocument>("Company", companySchema);
