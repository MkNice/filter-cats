import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICat } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})

export class DataCatsService {

  constructor(private http: HttpClient) { }

  public getCats(countCats: number): Observable<ICat[]> {
    return this.http.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?limit=${countCats}`, {
      headers: {
        'x-api-key': environment.API_KEY
      }
    });
  }

  public getCatsBreed(countCats: number, breedCat: string): Observable<ICat[]> {
    return this.http.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?limit=${countCats}&breed_ids=${breedCat}`, {
      headers: {
        'x-api-key': environment.API_KEY
      }
    });
  }
};
