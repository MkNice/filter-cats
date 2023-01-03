import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';
import { IAppState } from 'src/app/share/interfaces/app-state.interface';
import { ICat } from 'src/app/share/interfaces/cat.interface';
import { IFilter } from 'src/app/share/interfaces/filter.interface';
import { DataCatsService } from 'src/app/share/services/data-cats.service';
import { DestroyService } from 'src/app/share/services/destroy.service';
import { catsSelector } from 'src/app/store/selectors';
import { FilterComponent } from '../filter/filter.component';
import * as CatsActions from 'src/app/store/actions';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  providers: [DestroyService],
})

export class CatsComponent implements OnInit {
  @ViewChild(FilterComponent) filterComponent!: FilterComponent;

  public cats$: Observable<ICat[]> = this.store.select(catsSelector);


  public cats: ICat[] = [];

  constructor(private store: Store<IAppState>, private catsApi: DataCatsService, private $destroy: DestroyService) { }

  public ngOnInit(): void {
    this.getCats();
  }

  private getCats(): void {
    this.store.dispatch(CatsActions.getData());
  }

  public getCatsByBreed(event: IFilter): void {
    //   this.catsApi.getCatsByBreed(event.amountCats, event.currentBreed)
    //     .pipe(
    //       takeUntil(this.$destroy))
    //     .subscribe((response) => {
    //       this.cats = response;
    //     });
    // }
    
  }
}