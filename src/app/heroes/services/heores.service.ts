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
}
