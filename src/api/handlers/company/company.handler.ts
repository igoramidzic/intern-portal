import { Company, CompanyDocument } from "../../../models/company/company.model";
import { UserDocument } from "../../../models/user/user.model";

export let createNewCompany = (company: Company): Promise<CompanyDocument> =>
    new Promise((resolve, reject) => {
        Company.create(company)
            .then(async (company: CompanyDocument) => {
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
        );
    });

export let getCompanyById = (id: string) =>
    new Promise<CompanyDocument>((resolve, reject) => {
        Company.findById(id)
            .then((company: CompanyDocument) => resolve(company))
            .catch((err) => reject(err))
    });