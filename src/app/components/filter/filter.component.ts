import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICatBreed } from 'src/app/share/interfaces/cat-breed.interface';
import { IFilter } from 'src/app/share/interfaces/filter.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  @Output() dataFilter: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  public catBreeds: ICatBreed[] = [];

  public filterForm: FormGroup = new FormGroup({
    breed: new FormControl(''),
    amountCats: new FormControl(environment.DEFAULT_AMOUNT_CATS, [
      Validators.min(1),
      Validators.max(20),
    ])
  });

  public defaultFilterBreed: string = '';

  public emitFilterData(): void {
    const currentBreed = this.filterForm.value.breed;
    const amountCats = this.filterForm.value.amountCats;

    this.dataFilter.next({
      amountCats: amountCats,
      currentBreed: currentBreed
    }
    );
  }
}
