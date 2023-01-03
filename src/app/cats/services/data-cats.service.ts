import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICat } from '../interfaces/cat.interface';
import { ICatBreed } from '../interfaces/cat-breed.interface';

@Injectable({
  providedIn: 'root'
})

export class DataCatsService {

  constructor(private http: HttpClient) { }

  public getCats(): Observable<[ICat[], ICatBreed[]]> {
    const cats = this.http.get<ICat[]>(`${environment.SERVER_URL}images/search?limit=${environment.DEFAULT_AMOUNT_CATS}`, {
      headers: {
        'x-api-key': environment.API_KEY
      }
    });
    const breeds = this.http.get<ICatBreed[]>(`${environment.SERVER_URL}breeds/`, {
      headers: {
        'x-api-key': environment.API_KEY
      }
    });

    return forkJoin([cats, breeds]);
  }

  public getCatsByBreed(params: { countCats: number, breedCat: string; }): Observable<ICat[]> {
    let breedQuerry = '';

    if (params.breedCat) {
      breedQuerry = `&breed_ids=${params.breedCat}`;
    }

    return this.http.get<ICat[]>(`${environment.SERVER_URL}images/search?limit=${params.countCats}${breedQuerry}`, {
      headers: {
        'x-api-key': environment.API_KEY
      }
    });
  }
}