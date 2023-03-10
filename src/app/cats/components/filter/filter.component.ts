import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/cats/interfaces/app-state.interface';
import { ICatBreed } from 'src/app/cats/interfaces/cat-breed.interface';
import { IFilter } from 'src/app/cats/interfaces/filter.interface';
import { environment } from 'src/environments/environment';
import { breedsSelector as catBreedsSelector } from 'src/app/cats/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilterComponent {
  @Output() dataFilter: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  public catBreeds: Observable<ICatBreed[]> = this.store.select(catBreedsSelector);

  public filterForm: FormGroup = new FormGroup({
    breed: new FormControl(''),
    amountCats: new FormControl(environment.DEFAULT_AMOUNT_CATS, [
      Validators.min(1),
      Validators.max(20),
    ])
  });

  public readonly defaultFilterBreed: string = '';

  constructor(private store: Store<IAppState>) { }

  public emitFilterData(): void {
    const { currentBreed, amountCats } = this.filterForm.value;

    this.dataFilter.emit({
      amountCats: amountCats,
      currentBreed: currentBreed
    }
    );
  }
}