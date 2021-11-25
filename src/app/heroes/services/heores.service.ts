import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeoresService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes = (): Observable<Hero[]> => {
    return this.http.get<Hero[]>(this.baseUrl);
  };

  getHeroById = (id: number | string): Observable<Hero> => {
    return this.http.get<Hero>(`${this.baseUrl}/${id}`);
  };

  filter = (value: string): Observable<Hero[]> => {
    return this.http.get<Hero[]>(`${this.baseUrl}?q=${value}&_limit=5`);
  };

  storeHero = (hero: Hero): Observable<Hero> => {
    return this.http.post<Hero>(`${this.baseUrl}`, hero);
  };

  updateHero = (hero: Hero): Observable<Hero> => {
    return this.http.put<Hero>(`${this.baseUrl}/${hero.id}`, hero);
  };

  deleteHero = (id: string): Observable<any> => {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  };
}
