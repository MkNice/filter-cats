import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/cats/interfaces/app-state.interface';
import { ICat } from 'src/app/cats/interfaces/cat.interface';
import { catsSelector } from 'src/app/cats/store/selectors';
import * as CatsActions from 'src/app/cats/store/actions';
import { IFilter } from './interfaces/filter.interface';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CatsComponent {
  public cats$: Observable<ICat[]> = this.store.select(catsSelector);

  constructor(private store: Store<IAppState>) {
    this.getCats();
   }

  private getCats(): void {
    this.store.dispatch(CatsActions.getData());
  }

  public getCatsByBreed(event: IFilter): void {
    this.store.dispatch(CatsActions.getCatsByBreed({ params: { countCats: event.amountCats, breedCat: event.currentBreed } }));
  }
}