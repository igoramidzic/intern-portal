import { User, UserDocument } from "../../../models/user/user.model";
import { CompanyDocument } from "../../../models/company/company.model";

export let createNewUser = (user: User): Promise<UserDocument> =>
    new Promise((resolve, reject) => {
        User.create(user)
            .then(async (user: UserDocument) => {
                resolve(user);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export let updateUser = (userId: string, user: User): Promise<UserDocument> =>
    new Promise((resolve, reject) => {
        User.findOneAndUpdate({ _id: userId }, user, { new: true })
            .then(async (user: UserDocument) => {
                resolve(user);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export let deleteUser = (userId: string): Promise<UserDocument> =>
    new Promise((resolve, reject) => {
        User.findOneAndDelete({ _id: userId })
            .then(async (user: UserDocument) => {
                resolve(user);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export let getUserById = (id: string): Promise<UserDocument> =>
    new Promise((resolve, reject) => {
        User.findOne({ _id: id })
            .then((user: UserDocument) => {
                resolve(user);
            })
            .catch(error => {
                reject(error);
            })
    });

export let getUserByEmail = (email: string): Promise<UserDocument> =>
    new Promise((resolve, reject) => {
        User.findOne({ email })
            .then((user: UserDocument) => {
                resolve(user);
            })
            .catch(error => {
                reject(error);
            })
    });

export let getUsers = (company: CompanyDocument) =>
    new Promise<UserDocument[]>(async (resolve, reject) => {
        try {
            company.populate({
                path: 'users',
                populate: {
                    path: 'user'
                }
            }).execPopulate()
                .then((company: CompanyDocument) => {
                    resolve(company.users);
                })
                .catch(() => {
                    reject();
                })
        } catch (e) {
            reject(e)
        }
    });