import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ClientActions } from '../../store/clients.actions';
import { ClientsState } from '../../store/clients.state';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  showAddClientModal = false;
  showDeleteClientModal = false;
  modalTitle = 'Add Client';

  @Select(ClientsState.clientForEdit)
  clientForEdit$: Observable<Client>;

  @Select(ClientsState.clientForDelete)
  clientForDelete$: Observable<Client>;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new ClientActions.GetClients());
    this.clientForEdit$.subscribe(client => {
      if (client) {
        this.modalTitle = 'Edit Client';
        this.showAddClientModal = true;
      } else {
        this.modalTitle = 'Add Client';
      }
    })
  }

  onAddClientModalHide() {
    this.store.dispatch(new ClientActions.SetClientForEdit(null));
  }

  onDeleteClientModalHide() {
    this.store.dispatch(new ClientActions.SetClientForEdit(null));
  }

  onClientAdded() {
    this.showAddClientModal = false;
  }

  onClientEdited() {
    this.showAddClientModal = false;
  }

  onDeleteClientClicked() {
    this.showDeleteClientModal = true;
  }

  deleteClient(id: string) {
    this.store.dispatch(new ClientActions.DeleteClient(id))
    .subscribe(res => {
      this.showDeleteClientModal = false;
      this.store.dispatch(new ClientActions.SetClientForDelete(null));
    })
  }

}
