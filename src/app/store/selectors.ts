import { createSelector } from '@ngrx/store';
import { IAppState } from '../share/interfaces/app-state.interface';

export const selectFeature = (state: IAppState) => state.cats;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const catsSelector = createSelector(
  selectFeature,
  (state) => state.cats
);

export const breedsSelector = createSelector(
  selectFeature,
  (state) => state.breeds
);

export const catsErrorSelector = createSelector(
  selectFeature,
  (state) => state.error
);