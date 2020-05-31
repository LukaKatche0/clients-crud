import { Client } from 'src/app/models/client/client.model';

export interface ClientsStateModel {
    clients: Client[];
    clientForEdit: Client;
    clientForDelete: Client;
    filter: any;
}