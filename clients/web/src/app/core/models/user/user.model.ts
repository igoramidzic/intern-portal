import { Company } from '../company/company.model';

export type User = {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    userType?: UserType;
    company?: Company;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum UserType {
    Admin = 'admin',
    Manager = 'manager',
    Intern = 'intern'
}