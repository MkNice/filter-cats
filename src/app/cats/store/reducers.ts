import { createReducer, on } from '@ngrx/store';
import { ICatsState } from '../interfaces/cats-state.interface';
import * as CatsActions from './actions';

export const initialCatsState: ICatsState = {
  isLoading: false,
  cats: [],
  breeds: [],
  error: null,
  params: null,
};

export const reducers = createReducer(
  initialCatsState,
  on(CatsActions.getData, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CatsActions.getDataSuccess, (state, { CatsAndBreeds }) => ({
    ...state,
    isLoading: false,
    cats: CatsAndBreeds[0],
    breeds: CatsAndBreeds[1],
  })),
  on(CatsActions.getCatsByBreed, (state, { params }) => ({
    ...state,
    isLoading: true,
    params: params,
  })),
  on(CatsActions.getCatsByBreedSuccess, (state, { cats }) => ({
    ...state,
    isLoading: false,
    cats: cats,
  })),
  on(CatsActions.getCatsError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
);