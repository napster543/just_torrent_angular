import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tdata } from '../models/tmodelos.model';

@Injectable({
  providedIn: 'root'
})
export class CSservicesService {
  baseurl = 'https://localhost:44383/api/';
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }), 
  };

  ObtenerDato(cedula : string): Observable<Tdata> {
    return this.http
      .get<Tdata>(this.baseurl + 'ClientePago/'+ cedula)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  ObtenerDatos(): Observable<Tdata> {
    
    return this.http.get<Tdata>(this.baseurl + 'ClientePago')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
