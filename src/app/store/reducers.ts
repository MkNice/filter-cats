import { createReducer, on } from '@ngrx/store';
import { ICatsState } from '../share/interfaces/cats-state.interface';
import { getData, getCatsSuccess, getCatsError } from './actions';

export const initialState: ICatsState = {
  isLoading: false,
  data: [[], []],
  cats: [],
  breeds: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(getData, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getCatsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.data,
    cats: action.data[0],
    breeds: action.data[1],
  })),
  on(getCatsError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);