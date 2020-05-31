import { IClient } from './client.interface';
import { IClientAddress } from 'src/app/shared/models/address.interface';
import { Account } from '../account/account.model';
import { GenderEnum } from '../enums/gender.enum';

export class Client implements IClient {
    id: any;
    clientId: number;
    firstName: string;
    lastName: string;
    gender: GenderEnum;
    personalN: string;
    phoneNumber: string;
    legalAddress: IClientAddress;
    factualAddress: IClientAddress;
    avatarUrl: string;
    accounts: Account[];
}