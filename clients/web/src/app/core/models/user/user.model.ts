import { Company } from '../company/company.model';

export type IUser = {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    userType?: UserType;
    company?: Company;
    setupCompleted?: boolean;
    deactivated?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum UserType {
    Admin = 'admin',
    Manager = 'manager',
    Intern = 'intern'
}