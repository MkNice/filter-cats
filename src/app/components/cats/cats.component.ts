import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/share/interfaces/app-state.interface';
import { ICat } from 'src/app/share/interfaces/cat.interface';
import { IFilter } from 'src/app/share/interfaces/filter.interface';
import { catsSelector } from 'src/app/store/selectors';
import * as CatsActions from 'src/app/store/actions';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})

export class CatsComponent implements OnInit {
  public cats$: Observable<ICat[]> = this.store.select(catsSelector);

  constructor(private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.getCats();
  }

  private getCats(): void {
    this.store.dispatch(CatsActions.getData());
  }

  public getCatsByBreed(event: IFilter): void {
    this.store.dispatch(CatsActions.getCatsByBreed({ params: { countCats: event.amountCats, breedCat: event.currentBreed } }));
  }
}