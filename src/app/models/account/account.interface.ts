import { CurrencyEnum } from '../enums/currency.enum';
import { AccountStatusEnum } from '../enums/account-status.enum';
import { AccountTypeEnum } from '../enums/account-type.enum';

export interface IAccount {
    accountN: number;
    clientId: number;
    accountType: AccountTypeEnum;
    currency: CurrencyEnum;
    status: AccountStatusEnum;
}