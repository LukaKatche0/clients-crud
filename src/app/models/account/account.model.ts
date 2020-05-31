import { IAccount } from './account.interface';

export class Account implements IAccount{
    accountN: number;
    clientId: number;
    accountType: number;
    currency: number;
    status: number;
}