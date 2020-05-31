import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client/client.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private api: ApiService) {}

  getClients(filter: any): Observable<Client[]> {
    return this.api.get<Client[]>('clients', filter);
  }

  getClientById(id: string): Observable<Client> {
    return this.api.get<Client[]>(`clients/${id}`);
  }

  addClient(client: Client): Observable<any> {
    return this.api.post('clients', client);
  }

  editClient(id: string, client: Client): Observable<any> {
    return this.api.put(`clients/${id}`, client);
  }

  deleteClient(id: string) : Observable<any> {
    return this.api.delete(`clients/${id}`);
  }

}
