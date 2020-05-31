import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/models/client/client.model';
import { Observable } from 'rxjs';
import { ClientsState } from '../../store/clients.state';
import { Select, Store } from '@ngxs/store';
import { ClientActions } from '../../store/clients.actions';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit {
  cols: any[];
  @Select(ClientsState.clients)
  clients$: Observable<Client[]>;
  @Output() deleteClientClicked = new EventEmitter();
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'clientId', header: 'Client Id'},
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'personalN', header: 'Personal N.' },
      { field: 'phoneNumber', header: 'Phone Number' }
    ];
  }

  getClientById(id: string) {
    this.store.dispatch(new ClientActions.GetClientById(id));
  }

  onDeleteClientClicked(client: Client) {
    this.store.dispatch(new ClientActions.SetClientForDelete(client));
    this.deleteClientClicked.emit();
  }

}
