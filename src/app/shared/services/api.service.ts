import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T = any>(url: string, params?: Object) : Observable<any> {
    const httpParams = UtilService.buildQueryParams(params);
    return this.http.get<any>(url, {params: httpParams});
  }

  post<T = any>(url: string, body: Object) : Observable<any> {
    return this.http.post<any>(url, body);
  }

  put<T = any>(url: string, body: Object) : Observable<any> {
    return this.http.put<any>(url, body);
  }

  delete<T = any>(url: string) : Observable<any> {
    return this.http.delete<any>(url);
  }
  
}
