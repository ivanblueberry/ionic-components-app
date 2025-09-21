import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class Data {
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
