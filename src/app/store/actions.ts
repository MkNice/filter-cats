import { createAction, props } from '@ngrx/store';
import { ICatBreed } from '../share/interfaces/cat-breed.interface';
import { ICat } from '../share/interfaces/cat.interface';

export const getData = createAction('[Cats] Get Cats');
export const getCatsByBreed = createAction('Cats Get Cats by breed',
  props<{ countCats: number, breedCat: string; }>);
export const getCatsByBreedSuccess = createAction('Cats Get Cats by breed',
  props<{ cats: ICat[]; }>());
export const getCatsSuccess = createAction('[Cats] Get Cats - Success',
  props<{ data: [ICat[], ICatBreed[]]; }>());
export const getCatsError = createAction('[Cats] Get Cats - Error',
  props<{ error: string; }>());
