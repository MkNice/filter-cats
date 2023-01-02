import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataCatsService } from 'src/app/share/services/data-cats.service';


export interface Iexample {
  amountCats: number,
  currentBreed: string,
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})


export class FilterComponent implements OnInit {
  @Output() fields: EventEmitter<Iexample> = new EventEmitter<Iexample>();

  public breeds: any[] = []; //Фиксани потом any

  public cats: unknown[] = [];
  public forms: FormGroup = new FormGroup({
    breed: new FormControl(''),
    amountCats: new FormControl(10, [
      Validators.min(1),
      Validators.max(20),
    ])
  });

  constructor(private catsApi: DataCatsService) { }

  public ngOnInit(): void {
    this.getBreed();
  }

  public getBreed(): void {
    this.catsApi.getCatBreeds().subscribe((response) => this.breeds = response);
  }

  public getCatsByBreed(): void {
    const currentBreed = this.forms.value.breed;
    const amountCats = this.forms.value.amountCats;

    this.fields.next({
      amountCats: amountCats,
      currentBreed: currentBreed
    }
    );
  }
}
