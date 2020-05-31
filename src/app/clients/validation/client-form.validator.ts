import { ValidatorFn, AbstractControl } from '@angular/forms';
import { GenderEnum } from 'src/app/models/enums/gender.enum';
import { AccountTypeEnum } from 'src/app/models/enums/account-type.enum';
import { CurrencyEnum } from 'src/app/models/enums/currency.enum';
import { AccountStatusEnum } from 'src/app/models/enums/account-status.enum';

export namespace ClientFormValidator {
    export function GeorgianOrLatinValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
          const onlyGeorgian = /^[\u10D0-\u10F0 ]+$/.test(control.value);
          const onlyLatin = /^[a-zA-Z]+$/.test(control.value);
          return !onlyGeorgian && !onlyLatin ? {'georgianOrLatin': {value: control.value}} : null;
        };
    }  
      
    export function GenderValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
           const containsGender = Object.values(GenderEnum).includes(control.value);
           return !containsGender ? {'gender': {value: control.value}} : null;
        };
    }  

    export function PersonalNumberValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
           const isOnlyNumbers = /^[0-9]*$/.test(control.value);
           const hasProperLength = control.value ? control.value.length === 11 : false;
           return !isOnlyNumbers || !hasProperLength ? {'personalNumber': {value: control.value}} : null;
        };
    }  

    export function PhoneNumberValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
           const hasProperLength = control.value ? control.value.length === 9 : false;
           const isOnlyNumbers = /^[0-9]*$/.test(control.value);
           const startsWIthProperChar = control.value ? control.value.toString().charAt(0) === '5' : false;
           return !isOnlyNumbers || !hasProperLength || !startsWIthProperChar ? {'phoneNumber': {value: control.value}} : null;
        };
    }  
    
    export function IntegerValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
           const numberValue = control.value ? parseInt(control.value) : -1;
           const isInteger = numberValue !== -1 ? Number.isInteger(numberValue) : false;
           return !isInteger ? {'accountNumber': {value: control.value}} : null;
        };
    }  

    export function AccountTypeValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const containsType = Object.values(AccountTypeEnum).includes(control.value);
            return !containsType ? {'accountType': {value: control.value}} : null;
        };
    }  

    export function AccountCurrencyValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const containsCurrency = Object.values(CurrencyEnum).includes(control.value);
            return !containsCurrency ? {'accountCurrency': {value: control.value}} : null;
        };
    }  

    export function AccountStatusValidator(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const containsStatus = Object.values(AccountStatusEnum).includes(control.value);
            return !containsStatus ? {'accountStatus': {value: control.value}} : null;
        };
    }  

}