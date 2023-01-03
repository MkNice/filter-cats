import { IParams } from 'src/app/store/actions';
import { ICatBreed } from './cat-breed.interface';
import { ICat } from './cat.interface';

export interface ICatsState {
  isLoading: boolean,
  cats: ICat[],
  breeds: ICatBreed[],
  error: string | null,
  params: IParams | null
}