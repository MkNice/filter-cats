import { Component, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ICatBreed } from 'src/app/share/interfaces/cat-breed.interface';
import { ICat } from 'src/app/share/interfaces/cat.interface';
import { IFilter } from 'src/app/share/interfaces/filter.interface';
import { DataCatsService } from 'src/app/share/services/data-cats.service';
import { DestroyService } from 'src/app/share/services/destroy.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  providers: [DestroyService],
})

export class CatsComponent implements OnInit {
  @ViewChild(FilterComponent) filterComponent!: FilterComponent;

  public cats: ICat[] = [];
  public catsBreeds: ICatBreed[] = [];

  constructor(private catsApi: DataCatsService, private $destroy: DestroyService) { }

  public ngOnInit(): void {
    this.getCats();
  }

  private getCats(): void {
    this.catsApi.getCats()
      .pipe(
        takeUntil(this.$destroy))
      .subscribe((response: [ICat[], ICatBreed[]]) => {
        this.cats = response[0];
        this.filterComponent.catBreeds = response[1];
      });
  }

  public getCatsByBreed(event: IFilter): void {
    this.catsApi.getCatsByBreed(event.amountCats, event.currentBreed)
      .pipe(
        takeUntil(this.$destroy))
      .subscribe((response) => {
        this.cats = response;
      });
  }
}