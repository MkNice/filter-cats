import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataCatsService } from '../share/services/data-cats.service';
import * as CatsActions from './actions';


@Injectable()

export class CatsEffects {
  constructor(private actions$: Actions, private catsService: DataCatsService) { }

  getCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.getData),
      mergeMap(() => {
        return this.catsService.getCats().pipe(
          map((cats) => CatsActions.getCatsSuccess({ data: cats })),
          catchError((error) => of(CatsActions.getCatsError({ error: error.message }))));
      }))
  );

}