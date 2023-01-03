import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../interfaces/app-state.interface';
import { isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {
  public isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);

  constructor(private store: Store<IAppState>) { }
}