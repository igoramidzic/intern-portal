import { Company, CompanyDocument } from "../../../models/company/company.model";
import { getCompanyById, createNewCompany } from "../company/company.handler";
import { User, UserDocument } from "../../../models/user/user.model";
import { getUserById } from "../user/user.handler";

export let setupAdmin = (user: User, data: { company: Company }) =>
    new Promise(async (resolve, reject) => {
        // Check if user already belongs to a company
        const companyExists: CompanyDocument = await getCompanyById(user._id);
        if (companyExists != null)
            reject("User already belongs to a company");

        try {
            let company: CompanyDocument = await createNewCompany(data.company);

            let userDoc: UserDocument = await getUserById(user._id);
            userDoc.company = company;
            userDoc.setupCompleted = true;
            userDoc.save().then(() => { })
                .catch(() => reject());

            resolve({ company });
        } catch (e) {
            reject(e)
        }
    });

export let setupManager = (user: User, data: {}) =>
    new Promise(async (resolve, reject) => {
        try {
            let userDoc: UserDocument = await getUserById(user._id);
            userDoc.setupCompleted = true;
            userDoc.save().then(() => { })
                .catch(() => reject());

            resolve({});
        } catch (e) {
            reject(e)
        }
    });

export let setupIntern = (user: User, data: {}) =>
    new Promise(async (resolve, reject) => {
        try {
            let userDoc: UserDocument = await getUserById(user._id);
            userDoc.setupCompleted = true;
            userDoc.save().then(() => { })
                .catch(() => reject());

            resolve({});
        } catch (e) {
            reject(e)
        }
    });