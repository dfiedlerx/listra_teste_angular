import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { VeiculosGetList } from '../../models/veiculos-get-list.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  getList () : Observable<VeiculosGetList> {
    return this.http.get<VeiculosGetList>('https://run.mocky.io/v3/24fda311-d8b1-49ca-b35d-74ea1949020d');
  }

}
