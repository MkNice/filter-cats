import { createAction, props } from '@ngrx/store';
import { ICatBreed } from '../interfaces/cat-breed.interface';
import { ICat } from '../interfaces/cat.interface';
import { IParams } from '../interfaces/params.interface';

export const getData = createAction('[Cats] Get Data');

export const getDataSuccess = createAction('[Cats] Get Data - Success',
  props<{ CatsAndBreeds: [ICat[], ICatBreed[]]; }>());

export const getCatsByBreed = createAction('[Cats] Get Cats by breed',
  props<{ params: IParams; }>());

export const getCatsByBreedSuccess = createAction('[Cats] Get Cats by breed - Success',
  props<{ cats: ICat[]; }>());

export const getCatsError = createAction('[Cats] Get Cats - Error',
  props<{ error: string; }>());