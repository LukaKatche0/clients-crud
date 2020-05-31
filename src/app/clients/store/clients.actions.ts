import { Client } from 'src/app/models/client/client.model';
export namespace ClientActions {
    export class GetClients {
        static readonly type = '[Clients] Get Clients';
        constructor() {}
    }
    
    export class GetClientsSuccess {
        static readonly type = '[Clients] Get Clients Success';
        constructor(public payload: Client[]) {}
    }

    export class GetClientById {
        static readonly type = '[Clients] Get Client By Id';
        constructor(public id: string) {}
    }

    export class GetClientByIdSuccess {
        static readonly type = '[Clients] Get Client By Id Success';
        constructor(public payload: Client) {}
    }

    export class AddClient {
        static readonly type = '[Clients] Add Client';
        constructor(public payload: Client) {}
    }
    
    export class AddClientSuccess {
        static readonly type = '[Clients] Add Client Success';
        constructor(public payload: Client) {}
    }

    export class EditCLient {
        static readonly type = '[Clients] Edit Client';
        constructor(public id: string, public payload: Client) {}
    }
    
    export class EditClientSuccess {
        static readonly type = '[Clients] Edit Client Success';
        constructor(public payload: Client) {}
    }

    export class SetClientForEdit {
        static readonly type = '[Clients] Set Client For Edit';
        constructor(public payload: Client) {}
    }

    export class SetClientForDelete {
        static readonly type = '[Clients] Set Client For Delete';
        constructor(public payload: Client) {}
    }

    export class DeleteClient {
        static readonly type = '[Clients] Delete Client';
        constructor(public id: string) {}
    }

    export class DeleteClientSuccess {
        static readonly type = '[Clients] Delete Client Success';
        constructor(public id: string) {}
    }

    export class ResetSelectedClient {
        static readonly type = '[Clients] Reset Selected Client';
    }

    export class FilterClients {
        static readonly type = '[Clients] Filter Clients';
        constructor(public filter: any) {}
    }
}
