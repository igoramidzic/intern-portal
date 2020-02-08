import { Company } from '../company/company.model';

export type User = {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    userType?: string;
    company?: Company;
    createdAt?: Date;
    updatedAt?: Date;
}