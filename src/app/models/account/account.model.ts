import { IAccount } from './account.interface';
import { AccountTypeEnum } from '../enums/account-type.enum';
import { CurrencyEnum } from '../enums/currency.enum';
import { AccountStatusEnum } from '../enums/account-status.enum';

export class Account implements IAccount{
    accountN: number;
    clientId: number;
    accountType: AccountTypeEnum;
    currency: CurrencyEnum;
    status: AccountStatusEnum;
}