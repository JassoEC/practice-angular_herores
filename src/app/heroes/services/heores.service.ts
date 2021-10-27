import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeoresService {
  path: string = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes = (): Observable<Hero[]> => {
    return this.http.get<Hero[]>(this.path);
  };

  getHeroById = (id: number): Observable<Hero> => {
    return this.http.get<Hero>(`${this.path}/${id}`);
  };
}
