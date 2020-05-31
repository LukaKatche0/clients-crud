import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientFormValidator } from '../../validation/client-form.validator';
import { GenderEnum } from 'src/app/models/enums/gender.enum';
import { Store } from '@ngxs/store';
import { ClientActions } from '../../store/clients.actions';
import { isNil, isPlainObject } from 'lodash';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-clients-table-filters',
  templateUrl: './clients-table-filters.component.html',
  styleUrls: ['./clients-table-filters.component.scss']
})
export class ClientsTableFiltersComponent implements OnInit {
  searchForm: FormGroup;
  genderEnum = GenderEnum;
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      firstName: ['', [ClientFormValidator.GeorgianOrLatinValidator()]],
      lastName: ['',  [ClientFormValidator.GeorgianOrLatinValidator()]],
      personalN: ['', [ClientFormValidator.PersonalNumberValidator()]],
      phoneNumber: ['', [ClientFormValidator.PhoneNumberValidator()]]
    });
  }

  get isMaleSelected() {
    return this.searchForm.get('isMaleSelected').value;
  }

  get isFelameSelected() {
    return this.searchForm.get('isFemaleSelected').value;
  }

  filterClients() {
    const sanitizedFilters = UtilService.sanitizeFilters(this.searchForm.value);
    this.store.dispatch(new ClientActions.FilterClients(sanitizedFilters));
  }
}
