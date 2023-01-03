import { ICatBreed } from './cat-breed.interface';
import { ICat } from './cat.interface';

export interface ICatsState {
  isLoading: boolean,
  data: [ICat[], ICatBreed[]],
  cats: ICat[],
  breeds: ICatBreed[],
  error: string | null,
}