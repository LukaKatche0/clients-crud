import { IClientAddress } from 'src/app/shared/models/address.interface';
import { Account } from '../account/account.model';
import { GenderEnum } from '../enums/gender.enum';

export interface IClient {
    id: any;
    accounts: Account[];
    clientId: number;
    firstName: string;
    lastName: string;
    gender: GenderEnum;
    personalN: string;
    phoneNumber: string;
    legalAddress: IClientAddress;
    factualAddress: IClientAddress;
    avatarUrl: string;
}