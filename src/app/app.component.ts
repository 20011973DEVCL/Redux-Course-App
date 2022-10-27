import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>) {

    this.store.subscribe(state => {
      this.contador =  state.contador;
    })
  }

  sumar() {
    this.store.dispatch(actions.incrementar());
  }

  restar() {
    this.store.dispatch(actions.decrementar());
  }
}
