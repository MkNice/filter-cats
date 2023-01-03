import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataCatsService } from '../services/data-cats.service';
import * as CatsActions from './actions';

@Injectable()

export class CatsEffects {
  constructor(private actions$: Actions, private catsService: DataCatsService) { }

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.getData),
      mergeMap(() => {
        return this.catsService.getCats().pipe(
          map((data) => CatsActions.getDataSuccess({ CatsAndBreeds: data })),
          catchError((error) => of(CatsActions.getCatsError({ error: error.message }))));
      }))
  );

  getCatsByBreed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.getCatsByBreed),
      mergeMap((data) => {
        return this.catsService.getCatsByBreed(data.params).pipe(
          map((cats) => CatsActions.getCatsByBreedSuccess({ cats: cats })),
          catchError((error) => of(CatsActions.getCatsError({ error: error.message }))));
      }))
  );

}