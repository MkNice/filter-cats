import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IAppState } from './share/interfaces/app-state.interface';
import { isLoadingSelector } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isLoading$: Observable<boolean> = of(false);

  constructor(private store: Store<IAppState>) {
    this.isLoading$ = this.store.select(isLoadingSelector);
  }
}