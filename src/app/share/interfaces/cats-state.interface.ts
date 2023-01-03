import { ICatBreed } from './cat-breed.interface';
import { ICat } from './cat.interface';
import { IParams } from './params.interface';

export interface ICatsState {
  isLoading: boolean,
  cats: ICat[],
  breeds: ICatBreed[],
  error: string | null,
  params: IParams | null
}