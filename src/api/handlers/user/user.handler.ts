import { User, UserDocument } from "../../../models/user/user.model";

export let createNewUser = (user: User) =>
    new Promise((resolve, reject) => {
        User.create(user)
            .then(async (user: UserDocument) => {
                resolve(user);
            })
            .catch((error: any) => {
                console.log(error);
                reject(error);
            });
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