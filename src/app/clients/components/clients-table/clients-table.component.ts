import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/models/client/client.model';
import { Observable } from 'rxjs';
import { ClientsState } from '../../store/clients.state';
import { Select, Store } from '@ngxs/store';
import { ClientActions } from '../../store/clients.actions';
import { SetPage } from 'src/app/shared/store/table-state/table.state.actions';
import { TableState } from 'src/app/shared/store/table-state/table.state';

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
  @Select(TableState.page) page$: Observable<number>; 
  first: number = 0;
  rows = 5;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Client Id'},
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'personalN', header: 'Personal N.' },
      { field: 'phoneNumber', header: 'Phone Number' }
    ];
    this.page$.subscribe((page) => {
      this.first = (page - 1) * this.rows;
    });
  }

  onPage(event) {
    const pageIndex = event.first / event.rows + 1;
    this.store.dispatch(new SetPage(pageIndex));
  }

  getClientById(id: string) {
    this.store.dispatch(new ClientActions.GetClientById(id));
  }

  onDeleteClientClicked(client: Client) {
    this.store.dispatch(new ClientActions.SetClientForDelete(client));
    this.deleteClientClicked.emit();
  }

}
