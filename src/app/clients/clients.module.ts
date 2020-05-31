import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgxsModule } from '@ngxs/store';
import { ClientsState } from './store/clients.state';
import { SharedModule } from '../shared/shared.module';
import { CreateOrEditClientComponent } from './components/create-or-edit-client/create-or-edit-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ClientsTableFiltersComponent } from './components/clients-table-filters/clients-table-filters.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule}  from 'primeng/inputnumber';
import { MultiSelectModule}  from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [ClientsComponent, ClientsTableComponent, CreateOrEditClientComponent, ClientsTableFiltersComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    RadioButtonModule,
    FileUploadModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    InputNumberModule,
    DialogModule,
    CheckboxModule,
    SharedModule,
    NgxsModule.forFeature([ClientsState])
  ]
})
export class ClientsModule { }
