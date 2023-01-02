import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/app/share/interfaces/cat.interface';
import { DataCatsService } from 'src/app/share/services/data-cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})

export class CatsComponent implements OnInit { // Не забудь добавить автоотписку

  public cats: ICat[] = [];
  public countCats = 10;

  constructor(private catsApi: DataCatsService) { }

  public ngOnInit(): void {
    this.getCats();
  }

  private getCats(): void {
    this.catsApi.getCats(this.countCats).subscribe((response: ICat[]) => {
      this.cats = response;
    });
  }
}
