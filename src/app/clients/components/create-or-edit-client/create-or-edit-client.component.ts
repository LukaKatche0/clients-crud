import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ClientFormValidator } from '../../validation/client-form.validator';
import { GenderEnum } from 'src/app/models/enums/gender.enum';
import { ImageSnippet } from 'src/app/shared/models/image-snippet';
import { Store, Select } from '@ngxs/store';
import { ClientActions } from '../../store/clients.actions';
import { Client } from 'src/app/models/client/client.model';
import { ClientsState } from '../../store/clients.state';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/shared/services/util.service';
import { AccountTypeEnum } from 'src/app/models/enums/account-type.enum';
import { CurrencyEnum } from 'src/app/models/enums/currency.enum';
import { AccountStatusEnum } from 'src/app/models/enums/account-status.enum';
import { Account } from 'src/app/models/account/account.model';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ValidationMessages } from '../../validation/constants/validation.messages';

@Component({
  selector: 'app-create-or-edit-client',
  templateUrl: './create-or-edit-client.component.html',
  styleUrls: ['./create-or-edit-client.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(-180deg)' })),
        transition('rotated => default', animate('400ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})

export class CreateOrEditClientComponent implements OnInit {
  public clientForm: FormGroup;
  genderEnum = GenderEnum;
  avatar: ImageSnippet;
  avatarState: string = 'default';
  validationMessages = ValidationMessages;
  submitBtnText= 'Add Client';
  clientForEditId = null;
  accountTypeOptions = [
    {
      name: 'Current',
      value: AccountTypeEnum.Current
    },
    {
      name: 'Saving',
      value: AccountTypeEnum.Saving
    },
    {
      name: 'Accumulative',
      value: AccountTypeEnum.Accumulative
    }
  ];

  accountCurrencyOptions = [
    {
      name: 'GEL',
      value: CurrencyEnum.GEL
    },
    {
      name: 'USD',
      value: CurrencyEnum.USD
    },
    {
      name: 'EUR',
      value: CurrencyEnum.EUR
    },
    {
      name: 'RUB',
      value: CurrencyEnum.RUB
    }
  ];

  accountStatusOptions = [
    {
      name: 'Active',
      value: AccountStatusEnum.Active
    },
    {
      name: 'Closed',
      value: AccountStatusEnum.Closed
    },
  ]

  @Select(ClientsState.clientForEdit)
  clientForEdit$: Observable<Client>;

  @Output() clientAdded = new EventEmitter();
  @Output() clientEdited = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.clientForEdit$.subscribe(client => {
      if (client) {
        this.clientForEditId = client.id;
        this.submitBtnText = 'Edit Client';
        this.initializeForm();
        UtilService.setFormByModel(client, this.clientForm);
        if (client.accounts) {
          client.accounts.forEach(account => {
            this.addAccount(account);
          })
        }
      } else {
        this.clientForEditId = null;
        this.submitBtnText = 'Add Client';
        this.initializeForm();
        console.log(this.clientForm);
      }
    });
    this.clientForm.valueChanges
    .subscribe(() => {
      console.log(this.clientForm);
    })
  }

  initializeForm() {
    this.clientForm = this.fb.group({
      id: [''],
      clientId: [''],
      accounts: this.fb.array([]),
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), ClientFormValidator.GeorgianOrLatinValidator()]],
      lastName: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(50), ClientFormValidator.GeorgianOrLatinValidator()]],
      gender: [0, [Validators.required, ClientFormValidator.GenderValidator()]],
      personalN: ['', [Validators.required, ClientFormValidator.PersonalNumberValidator()]],
      phoneNumber: ['', [Validators.required, ClientFormValidator.PhoneNumberValidator()]],
      legalAddress: this.fb.group({
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        address: ['', [Validators.required]]
      }),
      factualAddress: this.fb.group({
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        address: ['', [Validators.required]]
      }),
      avatarUrl: ['']
    });
  }

  get accountsArr() {
    return this.clientForm.get('accounts') as FormArray;
  }

  addAccount(acc: Account) {
    const account = this.fb.group({
      accountN: ['', [Validators.required, ClientFormValidator.IntegerValidator]],
      clientId: ['', [Validators.required, ClientFormValidator.IntegerValidator]],
      accountType: [AccountTypeEnum.Current, [Validators.required, ClientFormValidator.AccountTypeValidator]],
      currency: [CurrencyEnum.GEL, [Validators.required, ClientFormValidator.AccountStatusValidator]],
      status: [AccountStatusEnum.Active, [Validators.required, ClientFormValidator.AccountStatusValidator]]
    });
    if (acc) {
      UtilService.setFormByModel(acc, account);
    }
    this.accountsArr.push(account);
  }

  deleteAccount(index: number) {
    this.accountsArr.removeAt(index);
  }

  onAvatarUploaded(image: ImageSnippet) {
    this.avatar = image;
    this.clientForm.patchValue({
      avatarUrl: image.src
    });
  }

  onSubmit() {
    this.store.selectSnapshot(ClientsState.clientForEdit) ? this.editClient() : this.addClient(); 
  }

  addClient() {
    this.store.dispatch(new ClientActions.AddClient(this.clientForm.value))
    .subscribe(res => {
      this.clientForm.reset();
      this.clientAdded.next();
    });
  }

  editClient() {
    this.store.dispatch(new ClientActions.EditCLient(this.clientForEditId, this.clientForm.value))
    .subscribe(res => {
      this.clientEdited.next();
    });
  }

  rotateAvatar() {
    this.avatarState = (this.avatarState === 'default' ? 'rotated' : 'default');
  }

}
