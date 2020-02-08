import mongoose from "mongoose";

export type Company = {
    name?: string,
}

export type CompanyDocument = mongoose.Document & {
    name: string;
    userId: string;
};

const companySchema = new mongoose.Schema({
    name: { type: String },
    users: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

companySchema.methods.toJSON = function () {
    const company = this;
    const companyObject = company.toObject();

    return companyObject;
}

export const Company = mongoose.model<CompanyDocument>("Company", companySchema);
