import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Componente, Heroe, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class Data {
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('/assets/data/superheroes.json');
  }

}
