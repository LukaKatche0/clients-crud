import { IClient } from './client.interface';
import { IClientAddress } from 'src/app/shared/models/address.interface';
import { Account } from '../account/account.model';

export class Client implements IClient {
    id: string;
    clientId: number;
    firstName: string;
    lastName: string;
    gender: string;
    personalN: string;
    phoneNumber: string;
    legalAddress: IClientAddress;
    factualAddress: IClientAddress;
    avatarUrl: string;
    accounts: Account[];
}