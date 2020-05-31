export class ValidationMessages {
    public static firstName = {
        required: 'First Name is required',
        georgianOrLatin: 'Must Contain Only Georgian or Only Latin Characters',
        title: 'First Name Error',
        description: 'First Name Error Message'
    };
    public static lastName = {
        required: 'Last Name is required',
        georgianOrLatin: 'Must Contain Only Georgian or Only Latin Characters',
        title: 'Last Name Error',
        description: 'Last Name Error Message'
    };
    public static gender = {
        required: 'Gender is required',
        gender: 'Invalid Gender',
        title: 'Gender Error',
        description: 'Gender Error Message'
    };
    public static personalN = {
        required: 'Personal Number is required',
        personalNumber: 'Must Contain Only Numbers and be 11 characters long',
        title: 'Personal Number Error',
        description: 'Personal Number Error Message'
    };
    public static phoneNumber = {
        required: 'Phone Number is required',
        phoneNumber: 'Phone Number Must Contain Only Numbers, be 9 characters long and start with 5',
        title: 'Phone Number Error',
        description: 'Phone Number Error Message'
    };
    public static country = {
        required: 'Country is required',
        title: 'Country Error',
        description: 'Country Error Message'
    };
    public static city = {
        required: 'City is required',
        title: 'City Error',
        description: 'City Error Message'
    };
    public static address = {
        required: 'Address is required',
        title: 'Address Error',
        description: 'Address Error Message'
    };
    public static accountNumber = {
        required: 'Account Number is required',
        accountNumber: 'Account Number Must Be An Integer',
        title: 'Account Number Error',
        description: 'Account Number Error Message'
    };
    public static accountType = {
        required: 'Account Type is required',
        accountType: 'Invalid Account Type',
        title: 'Account Type Error',
        description: 'Account Type Error Message'
    };
    public static accountCurrency = {
        required: 'Account Currency is required',
        accountNumber: 'Invalid Account Currency',
        title: 'Account Currency Error',
        description: 'Account Currency Error Message'
    };
    public static accountStatus = {
        required: 'Account Status is required',
        accountNumber: 'Invalid Account Status',
        title: 'Account Status Error',
        description: 'Account Status Error Message'
    };
}