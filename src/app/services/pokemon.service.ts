import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}


  getFirstTwentyPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=40`);
  }


  getPokemonById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }
}

