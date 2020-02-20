import { Company, CompanyDocument } from "../../../models/company/company.model";
import { UserDocument } from "../../../models/user/user.model";

export let createNewCompany = (company: Company): Promise<CompanyDocument> =>
    new Promise((resolve, reject) => {
        console.log("Goodbyeeeeeeee")
        console.log(company)
        Company.create(company)
            .then(async (company: CompanyDocument) => {
                console.log(company)
                resolve(company);
            })
            .catch((error: any) => {
                console.log(error);
                reject(error);
            });
    });

export let updateCompany = (company: CompanyDocument) =>
    new Promise((resolve, reject) => {
        company.save().then((updatedCompany: CompanyDocument) =>
            resolve(updatedCompany)
        ).catch(err => reject(err));
    });

export let getCompanyById = (id: string) =>
    new Promise<CompanyDocument>((resolve, reject) => {
        Company.findById(id)
            .then((company: CompanyDocument) => resolve(company))
            .catch((err) => reject(err))
    });

export let getCompanyUsersById = (id: string) =>
    new Promise<UserDocument[]>(async (resolve, reject) => {
        try {
            let company: CompanyDocument = await Company.findById(id);
            if (!company)
                reject("Company not found");

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