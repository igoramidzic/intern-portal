import { Company, CompanyDocument } from "../../../models/company/company.model";

export let createNewCompany = (company: Company): Promise<CompanyDocument> =>
    new Promise((resolve, reject) => {
        Company.create(company)
            .then(async (company: CompanyDocument) => {
                resolve(company);
            })
            .catch((error: any) => {
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