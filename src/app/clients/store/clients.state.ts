import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { ClientsStateModel } from './clients.state.model';
import { ClientActions } from './clients.actions';
import { ClientsService } from '../services/clients.service';
import { tap, mergeMap } from 'rxjs/operators';
import { patch, append, updateItem, removeItem } from '@ngxs/store/operators';
import { Client } from 'src/app/models/client/client.model';

@State<ClientsStateModel>({
  name: 'clients',
  defaults: {
    clients: [],
    clientForEdit: null,
    clientForDelete: null,
    filter: null
  },
})
@Injectable()
export class ClientsState {
  constructor(private clientsService: ClientsService) {}

  @Action(ClientActions.GetClients)
  getClients(ctx: StateContext<ClientsStateModel>) {
    const state = ctx.getState();
    return this.clientsService.getClients(state.filter).pipe(
      tap((result) => {
        ctx.dispatch(new ClientActions.GetClientsSuccess(result));
      })
    );
  }

  @Action(ClientActions.GetClientsSuccess)
  getClientsSuccess(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.GetClientsSuccess
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      clients: action.payload,
    });
  }

  @Action(ClientActions.GetClientById)
  GetClientById(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.GetClientById
  ) {
    return this.clientsService
      .getClientById(action.id)
      .pipe(
        mergeMap((client) =>
          ctx.dispatch(new ClientActions.GetClientByIdSuccess(client))
        )
      );
  }

  @Action(ClientActions.GetClientByIdSuccess)
  getClientByIdSuccess(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.GetClientByIdSuccess
  ) {
    ctx.dispatch(new ClientActions.SetClientForEdit(action.payload));
  }

  @Action(ClientActions.SetClientForEdit)
  setClientForEdit(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.SetClientForEdit
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      clientForEdit: action.payload,
    });
  }

  @Action(ClientActions.SetClientForDelete)
  setClientForDelete(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.SetClientForDelete
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      clientForDelete: action.payload,
    });
  }

  @Action(ClientActions.AddClient)
  addClient(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.AddClient
  ) {
    return this.clientsService
      .addClient(action.payload)
      .pipe(
        mergeMap(() =>
          ctx.dispatch(new ClientActions.AddClientSuccess(action.payload))
        )
      );
  }

  @Action(ClientActions.AddClientSuccess)
  addClientSuccess(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.AddClientSuccess
  ) {
    ctx.setState(
      patch({
        clients: append([action.payload]),
      })
    );
  }

  @Action(ClientActions.EditCLient)
  editClient(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.EditCLient
  ) {
    return this.clientsService
      .editClient(action.id, action.payload)
      .pipe(
        mergeMap(() =>
          ctx.dispatch(new ClientActions.EditClientSuccess(action.payload))
        )
      );
  }

  @Action(ClientActions.EditClientSuccess)
  editClientSuccess(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.EditClientSuccess
  ) {
    ctx.setState(
      patch({
        clients: updateItem(
          (item) => item.clientId === action.payload.clientId,
          action.payload
        ),
      })
    );
  }

  @Action(ClientActions.DeleteClient)
  deleteClient(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.DeleteClient
  ) {
    return this.clientsService
      .deleteClient(action.id)
      .pipe(
        mergeMap(() =>
          ctx.dispatch(new ClientActions.DeleteClientSuccess(action.id))
        )
      );
  }

  @Action(ClientActions.DeleteClientSuccess)
  deleteClientSuccess(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.DeleteClientSuccess
  ) {
    ctx.setState(
      patch({
        clients: removeItem<Client>((client) => client.id === action.id),
      })
    );
  }

  @Action(ClientActions.FilterClients)
  filterClients(
    ctx: StateContext<ClientsStateModel>,
    action: ClientActions.FilterClients
  ) {
    ctx.setState(
      patch({
        filter: action.filter,
      })
    );
    ctx.dispatch(new ClientActions.GetClients());
  }

  @Selector()
  static clients(state: ClientsStateModel) {
    return state.clients;
  }

  @Selector()
  static clientForEdit(state: ClientsStateModel) {
    return state.clientForEdit;
  }

  @Selector()
  static clientForDelete(state: ClientsStateModel) {
    return state.clientForDelete;
  }
}
