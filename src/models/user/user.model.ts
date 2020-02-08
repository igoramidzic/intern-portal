import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt-nodejs';
import { Company, CompanyDocument } from "../company/company.model";

export enum UserType {
    Admin = "admin",
    Company = "company",
    Intern = "intern"
}

export type User = {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    userType?: string,
    company?: Company,
}

export type UserDocument = mongoose.Document & {
    firstName: string,
    lastName: string,
    email: string,
    password: string,

    userType: string,
    company: CompanyDocument,

    comparePassword: comparePasswordFunction
}

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMath: any) => {}) => void;

export type AuthToken = {
    accessToken: string,
    kind: string
}

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
    userType: { type: String, lowercase: true },
    company: { type: mongoose.Types.ObjectId, ref: 'Company', required: false }
}, { timestamps: true });

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;

    return userObject;
}

userSchema.pre("save", function save(next) {
    const user: any = this;

    user.email = user.email.toLowerCase().trim();

    if (!user.isModified("password")) { return next(); }

    bcrypt.genSalt(10, (err: any, salt: any) => {
        if (err) { return next(err) }

        bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash: any) => {
            if (err) { return next(err) }

            user.password = hash;
            next();
        })
    })
})

const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch)
    })
}

userSchema.methods.comparePassword = comparePassword;

export const User = mongoose.model<UserDocument>("User", userSchema);
