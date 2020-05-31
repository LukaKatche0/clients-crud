import { IClientAddress } from 'src/app/shared/models/address.interface';
import { Account } from '../account/account.model';

export interface IClient {
    id: string;
    accounts: Account[];
    clientId: number;
    firstName: string;
    lastName: string;
    gender: string;
    personalN: string;
    phoneNumber: string;
    legalAddress: IClientAddress;
    factualAddress: IClientAddress;
    avatarUrl: string;
}